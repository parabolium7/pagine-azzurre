import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import User from '../models/userModel.js'
import { isAdmin, isAuth, isSellerOrAdmin } from '../utils.js';
import dotenv from 'dotenv'
import sgMail from "@sendgrid/mail"
import { msgOrderNotificationToOfferer,
         msgOrderNotificationToBuyer,
         secondMailToOfferer } from '../emailTemplates/mailMsg.js'

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const orderRouter = express.Router();
orderRouter.get(
  '/',
  isAuth,
  isSellerOrAdmin,
  expressAsyncHandler(async (req, res) => {
    const seller = req.query.seller || '';
    const sellerFilter = seller ? { seller } : {};

    const orders = await Order.find({ ...sellerFilter }).populate(
      'user',
      'name'
    );
    res.send(orders);
  })
);
orderRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
  })
);

// orderRouter.post(
//   '/mailing',
//   isAuth,
//   expressAsyncHandler(async (req, res) => {
//   const seller = await User.findById(req.body.order.seller)
//   const order = await Order.findById(req.body.order._id)
//   console.log("mailing", req.body)
//   let orderNames = ""
//   req.body.order.orderItems.forEach((o) => orderNames += o.name + ' ')
//   let envelop = { offerer: { email: seller.email, name: ( seller.name ? seller.name : seller.username )}, buyer: req.body.buyer, orderNames}
//   const recipient = secondMailToOfferer(envelop)
//   sgMail.send(recipient)
//   .then((res) => {
//     console.log("Mailing Order RES_CODE: ", res[0].statusCode)
//   })
//   .catch((error) => { console.error(error)})
//   res.status(202).send({ mailStatus: "Mail Sent.", resp_code: 1 })
// }))

orderRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({ message: 'Cart is empty' });
    } else {
      const order = new Order({
        seller: req.body.orderItems[0].seller,
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        itemsPriceVal: req.body.itemsPriceVal,
        itemsPriceEuro: req.body.itemsPriceEuro,
        totalPriceVal: req.body.totalPriceVal,
        totalPriceEuro: req.body.totalPriceEuro,
        shippingPrice: req.body.shippingPrice,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: 'New Order Created', order: createdOrder });
    }
  })
);

orderRouter.get(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

orderRouter.put(
  '/:id/pay',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      // order.paymentResult = {
      //   id: req.body.id,
      //   status: req.body.status,
      //   update_time: req.body.update_time,
      //   email_address: req.body.email_address,
      // };
      const updatedOrder = await order.save();
      res.send({ message: 'Order Paid', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

orderRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      const deleteOrder = await order.remove();
      res.send({ message: 'Order Deleted', order: deleteOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

orderRouter.put(
  '/:id/deliver',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();
      const updatedOrder = await order.save();
      res.send({ message: 'Order Delivered', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);

orderRouter.post(
  '/mailing',
  isAuth,
  expressAsyncHandler(async (req, res) => {
  const seller = await User.findById(req.body.order.seller)
  const order = await Order.findById(req.body.order._id)
  console.log("mailing", req.body)
  let orderNames = ""
  req.body.order.orderItems.forEach((o) => orderNames += o.name + ' ')
  let envelop = { offerer: { email: seller.email, name: ( seller.name ? seller.name : seller.username )}, buyer: req.body.buyer, orderNames, emailBody: req.body.emailBody}
  const recipient = secondMailToOfferer(envelop)
  sgMail.send(recipient)
    .then((res) => {
      console.log("Mailing Order RES_CODE: ", res[0].statusCode)
    })
    .catch((error) => { console.error(error)})
  res.status(202).send({ mailStatus: "Mail Sent.", resp_code: 1 })
}))

orderRouter.post(
  '/notifications',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    console.log("Request notification", req.body)
    // console.log("User Buyer", req.user.email)
    // console.log("User Offerer", req.body.seller)
    const buyer = await User.find({ email: req.user.email });
    const offerer = await User.findById(req.body.seller);
    // console.log("Offerer: ", offerer, "Buyer: ", buyer)
    // console.log("Order Details: ", req.body)
    let recipientOfferer = msgOrderNotificationToOfferer(offerer, req.body, buyer)
    let recipientBuyer = msgOrderNotificationToBuyer(buyer, req.body, offerer)
    sgMail.send(recipientOfferer)
        .then(() => {
          console.log("Notification sent to offerer")
          sgMail.send(recipientBuyer)
            .then(() => {
              console.log("Notification sent to buyer")
            })
            .catch((error) => {
              console.error(error)
            })
        }) 
        .catch((error) => {
          console.error(error)
        })
    res.status(202).send({ mailStatus: "Mail Sent.", resp_code: 2 })
  })

);

export default orderRouter;
