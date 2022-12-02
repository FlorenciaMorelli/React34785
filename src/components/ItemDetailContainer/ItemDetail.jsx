import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";
import { Link } from "react-router-dom";
import cartContext from "../../storage/CartContext";
import Button from "../Button/Button";

function ItemDetail({ product }) {
  const [isInCart, setIsInCart] = useState(false);

  const { cart, addToCart } = useContext(cartContext);

  let itemInCart = cart.find( (item) => product.id === item.id);
  let stock = product.stock;
  if (itemInCart) stock -= itemInCart.count;

  function onAddToCart(count) {
    const itemForCart = {
      ...product,
      count,
    };

    addToCart(itemForCart);
    setIsInCart(true);
  }

  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">${product.price}</h4>
      </div>
      {!isInCart ? (
        <ItemCount
          text="Agregar al carrito"
          onAddToCart={onAddToCart}
          stock={stock}
        />
      ) : (
        <div>
          <Link to="/cart">
            <Button type="fitContent">Ir al Carrito</Button>
          </Link>
          <Link to="/">
            <Button type="fitContent">Volver al catálogo</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;