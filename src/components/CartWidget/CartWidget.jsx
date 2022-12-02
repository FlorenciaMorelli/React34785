import React, { useContext } from 'react';
import "./cartwidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import cartContext from "../../storage/CartContext.jsx"

function CartWidget() {
  const { totalItemsInCart } = useContext(cartContext);

  return (
    <div>
    <FontAwesomeIcon className='cartNavBar' icon={faCartShopping}/>
    <br></br>
    {totalItemsInCart() > 0 ? (
      <>
        <span className="totalItemsInCart">{totalItemsInCart()}</span>
      </>
    ) : (
      <></>
    )}
  </div>
  )
}

export default CartWidget;