import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import User from '../models/userModel.js';
import dotenv from 'dotenv'
import { generateToken, isAdmin, isAuth } from '../utils.js';
import sgMail from "@sendgrid/mail"
import { msgRegistration, msgPasswordRecovery } from '../emailTemplates/mailMsg.js'

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const userRouter = express.Router();

userRouter.get(
  '/top-sellers',
  expressAsyncHandler(async (req, res) => {
    const topSellers = await User.find({ isSeller: true })
      .sort({ 'seller.rating': -1 })
      .limit(3);
    res.send(topSellers);
  })
);

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      console.log(user)
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          username: user.username,
          name: user.name,
          surname: user.surname,
          birthday: user.birthplace,
          birthplace: user.birthplace,
          gender: user.gender,
          cf: user.cf,
          city: user.city,
          zipCode: user.zipCode,
          phone: user.phone,
          email: user.email,
          referer: user.referer,
          isAdmin: user.isAdmin,
          isSeller: user.isSeller,
          test: "test Router!!!",
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);

userRouter.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    console.log(req.body)
    const user = new User({
      username: req.body.username,
      cf: req.body.cf,
      email: req.body.email,
      phone: req.body.phone,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    let recipient = msgRegistration(createdUser.email)
    sgMail.send(recipient)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      }
    )
    res.send({
      _id: createdUser._id,
      username: createdUser.username,
      email: createdUser.email,
      phone: createdUser.email,
      cf: createdUser.email,
      token: generateToken(createdUser),
    });
  })
);

userRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

userRouter.put(
  '/profile',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    console.log("Router_Get", user.phone)
    console.log("Router_Get", req.body.phone)

    if (user) {
      user.name = req.body.name || user.name;
      user.surname = req.body.surname || user.surname;
      user.username = req.body.username || user.username;
      user.gender = req.body.gender || user.gender;
      user.birthplace = req.body.birthplace || user.birthplace;
      user.birthday = req.body.birthday || user.birthday;
      user.cf = req.body.cf || user.cf;
      user.email = req.body.email || user.email;
      user.city = req.body.city || user.city;
      user.zipCode = req.body.zipCode || user.zipCode;
      user.phone = req.body.phone || user.phone;
      user.referer = req.body.referer || user.referer;
      if (user.isSeller) {
        user.seller.name = req.body.sellerName || user.seller.name;
        user.seller.logo = req.body.sellerLogo || user.seller.logo;
        user.seller.description =
          req.body.sellerDescription || user.seller.description;
      }
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      console.log("userProfile", updatedUser)
      res.send({
        _id: updatedUser._id,
        username: updatedUser.username,
        name: updatedUser.name,
        surname: updatedUser.surname,
        cf: updatedUser.cf,
        birthday: user.birthday,
        birthplace: updatedUser.birthplace,
        city: updatedUser.city,
        gender: updatedUser.gender,
        email: updatedUser.email,
        phone: updatedUser.phone,
        referer: updatedUser.referer,
        isAdmin: updatedUser.isAdmin,
        isSeller: user.isSeller,
        token: generateToken(updatedUser),
      });
    }
  })
);

userRouter.get(
  '/profile',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    console.log("UserRouter_Get", user)
    if (user) {
      user.name = req.body.name || user.name;
      user.surname = req.body.surmame || user.surname;
      user.username = req.body.username || user.username;
      user.gender = req.body.gender || user.gender;
      user.cf = req.body.cf || user.cf;
      user.email = req.body.email || user.email;
      user.city = req.body.city || user.city;
      user.zipCode = req.body.zipCode || user.zipCode;
      user.phone = req.body.phone || user.phone;
      user.referer = req.body.referer || user.referer;
      if (user.isSeller) {
        user.seller.name = req.body.sellerName || user.seller.name;
        user.seller.logo = req.body.sellerLogo || user.seller.logo;
        user.seller.description =
          req.body.sellerDescription || user.seller.description;
      }
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      console.log(updatedUser)
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
        referer: updatedUser.referer,
        isAdmin: updatedUser.isAdmin,
        isSeller: user.isSeller,
        token: generateToken(updatedUser),
      });
    }
  })
);

userRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  })
);

userRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      if (user.email === 'admin@example.com') {
        res.status(400).send({ message: 'Can Not Delete Admin User' });
        return;
      }
      const deleteUser = await user.remove();
      res.send({ message: 'User Deleted', user: deleteUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

userRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isSeller = Boolean(req.body.isSeller);
      user.isAdmin = Boolean(req.body.isAdmin);
      // TODO: Enable Admin
      // user.isAdmin = req.body.isAdmin || user.isAdmin;
      const updatedUser = await user.save();
      res.send({ message: 'User Updated', user: updatedUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

userRouter.post(
  '/password-recovery',
  expressAsyncHandler(async (req, res) => {
    // TODO use to validate also CF const user = await User.findOne({ cf: "LGMGMNL0176Z614M" });
    const data = await User.find({ email: req.body.email });
    console.log("Password Recovery", data[0].email === req.body.email)
    if (data[0].email === req.body.email) {
      let recipient = msgPasswordRecovery(data[0].email)
      res.send({email: true, loading: false })
      sgMail.send(recipient)
        .then(() => {
          // TODO: To Andrei.
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
      return
    } else {
      res.status(404).send({ message: 'Email Not Found' })
    } 
  })
);

export default userRouter;
