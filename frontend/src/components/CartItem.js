import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart, removeFromCart } from "../actions/cartActions";

import imgNotFound from "../resources/img-not-found-small.png"
import {ReactComponent as DeleteIcon} from "../resources/delete-icon.svg"

export default function CartItem({item}) {
  const dispatch = useDispatch()


  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  return (
    <li className="cart__item">
    {/* <div className="row"> */}
      <div className="cart__item__img-container">
        <img
          src={item.image[0]}
          alt={item.name}
          // className="small"
          onError={({ currentTarget }) => {
            currentTarget.src = null
            currentTarget.src = imgNotFound
            currentTarget.style.objectFit = 'cover'
          }}
        ></img>
      </div>
      <div className="cart__item__description-container">
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <div className="cart__item__price-container">
          <div>€ {item.priceEuro}</div>
          <div> e ☯{item.priceVal}</div>
        </div>
      </div>
      <div className="cart__item__actions-container">
        <div>
          <select
            value={item.qty}
            onChange={(e) =>
              dispatch(
                addToCart(item.product, Number(e.target.value))
              )
            }
          >
            {[...Array(item.countInStock).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="cart__item__actions-container__delete-btn__container">
          <button
            type="button"
            onClick={() => removeFromCartHandler(item.product)}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
  </li>
  )
}
