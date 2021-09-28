import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { savePaymentMethod } from '../actions/cartActions';
import { payVals } from '../actions/paymentActions';
import CheckoutSteps from '../components/CheckoutSteps';
import MessageBox from '../components/MessageBox';

import Web3 from 'web3'
import SContract from '../web3Interface/abi.js'
const web3 = new Web3('wss://goerli.infura.io/ws/v3/ea90d8f923e5484c84e7518e9f58f16b')
const networkId = 5
const deployedNetwork = SContract.networks[networkId]
const _contract = new web3.eth.Contract(SContract.abi, deployedNetwork.address)

export default function PaymentMethodScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails
  const cart = useSelector((state) => state.cart);
  const [phase, setPhase] = useState(1)
  const [balance, setBalance] = useState('')
  const { cartItems , shippingAddress } = cart

  async function getSetBalance(account) {
    let balance = await _contract.methods.balanceOf(account).call()
    balance = parseFloat(balance) / 100
    setBalance(balance)
  }

  if (!shippingAddress.address) {
    props.history.push('/shipping')
  }
  const [paymentMethod, setPaymentMethod] = useState('Concordato');
  const dispatch = useDispatch();
  const changePhase = () => {
    setPhase(2)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    dispatch(payVals(userInfo.account, cartItems))
    props.history.push('/placeorder');
  };
  useEffect(() => {
    window.scrollTo(0, 0)
    getSetBalance(userInfo.account)
  }, [userInfo.account])
  return (
    <div className="flash">
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      { phase === 1 && (
        <form className="form" onSubmit={changePhase}>
          <div className="row center">
            <h1>Metodo di Pagamento</h1>
            <p>Il metodo di pagamento deve essere concordato direttamente con l'offerente</p>
          </div>
          {/* <div>
            <div>
              <input
                type="radio"
                id="paypal"
                value="PayPal"
                name="paymentMethod"
                required
                checked
                disabled
                onChange={ (e) => setPaymentMethod(e.target.value) }
              ></input>
              <label htmlFor="paypal">PayPal (attualmente Inattivo dal sito)</label>
            </div>
          </div> */}
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
              <label htmlFor="stripe">Euro € (attualmente inattivo)</label>
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
              <label htmlFor="stripe">Monete speculative (attualmente inattivo)</label>
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
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>
              <label htmlFor="stripe">Val ☯️</label>
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
      )}
      { phase === 2 && (
        <div>
          <form className="form" onSubmit={submitHandler}>
          <div className="row center">
            <h1>Paga addesso i Val richieste in questo scambio</h1>
            <p>Attualmente hai <strong>{ balance }</strong> Vals nel tuo portafoglio delle pagineazzurre</p>
          </div>
          <div>
            <div>
            </div>
          </div>
          <div>
            <label />
            <button className="primary blu" type="submit">
              <p style={{ fontSize: "1.85rem" }}>Trasferisci la quantità di <strong>{cartItems.reduce((a, c) => a + c.priceVal * c.qty, 0)}</strong> Val all'offerente</p>
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
      )}
      </div>
  );
}
