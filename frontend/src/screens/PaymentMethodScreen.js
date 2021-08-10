import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import MessageBox from '../components/MessageBox';

export default function PaymentMethodScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push('/shipping');
  }
  const [paymentMethod, setPaymentMethod] = useState('Concordato');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/placeorder');
  };
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="flash">
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div className="row center">
          <h1>Metodo di Pagamento per la Spedizione</h1>
          <p>Attualmente il metodo di pagamento deve essere concordato direttamente con l'offerente</p>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              disabled
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="paypal">PayPal</label>
          </div>
        </div>
        <div>
          <div>
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              disabled
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>
        <div>
          <label />
          <button className="primary blu" type="submit">
            Prosegui
          </button>
          { !userInfo.hasAd && 
            (
              <MessageBox variant="alert">
                Ricordati che per poter entrare in contatto con un offerente devi prima mettere un prodotto in vetrina. <Link to='/productlist/seller'>Crea l'annuncio addeso</Link>
              </MessageBox>
            )
          }
        </div>
      </form>
    </div>
  );
}
