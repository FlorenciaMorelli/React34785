import React from 'react';
import "./cartwidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping }  from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div >
    <FontAwesomeIcon className='cartNavBar' icon={faCartShopping}/>
  </div>
  )
}

export default CartWidget;