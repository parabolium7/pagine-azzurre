import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";
 import CartItem from "../components/CartItem";

export default function CartScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);



  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  return (
    <div className="row top flash cart__container">
      <div className="col-2">
        <h1>Processo di conttato all'offerente</h1>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {cartItems.length === 0 ? (
          <MessageBox>
            Il carrelo e vuoto. <Link to="/">Torna alla Vetrina</Link>
          </MessageBox>
        ) : (
          <ul className="cart">
            {cartItems.map((item) => (
              <CartItem item={item} key={item.product} />
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body card--cart">
          <ul>
            <li>
              <p>Comincia cercando articoli che ti interessano</p>
              <h2>
                totale parziale ({cartItems.reduce((a, c) => a + c.qty, 0)}{" "}
                items) : ☯
                {cartItems.reduce((a, c) => a + c.priceVal * c.qty, 0)} e €{" "}
                {cartItems.reduce((a, c) => a + c.priceEuro * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Continua per conttatare l'offerente
              </button>
              {userInfo && !userInfo.hasAd && (
                <MessageBox variant="alert">
                  Ricordati che per poter entrare in contatto con un offerente
                  devi prima mettere un prodotto in vetrina. <br></br>{" "}
                  <Link to="/productlist/seller">Crea l'annuncio addesso</Link>
                </MessageBox>
              )}
              {!userInfo && (
                <MessageBox variant="alert">Devi essere loggato.</MessageBox>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
