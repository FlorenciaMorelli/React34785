import React, { useState } from "react";
import Button from "../Button/Button";
import "./itemcount.css";

function ItemCount({ stock, onAddToCart, text }) {
  const [count, setCount] = useState(1);

  function handleAdd(evt) {
    console.log(evt);
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract(evt) {
    console.log(evt);
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <Button color="#b53f3f" onClick={handleSubstract}>
          -
        </Button>
        <span className="count">{count}</span>
        <Button color="#3ab546" onClick={handleAdd}>
          +
        </Button>
      </div>
      <div className="itemcount_btns">
        <Button type="fitContent" onClick={() => onAddToCart(count)}>{text}</Button>
      </div>
    </div>
  );
}

export default ItemCount;