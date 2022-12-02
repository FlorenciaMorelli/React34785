import React, { useContext } from 'react'
import { createBuyOrderFirestoreWithStock } from "../../services/firebase.js";
import cartContext from "../../storage/CartContext.jsx";
import Swal from 'sweetalert2';
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import BuyForm from "./BuyForm";
import FlexWrapper from '../FlexWrapper/FlexWrapper.jsx';
import "./cartview.css"

function CartView() {
    const { cart, clear, removeItem, totalPriceInCart } = useContext(cartContext)
    const navigate = useNavigate();

    if(cart.lenght === 0) return <h1>Aún no agregaste ningún item a tu carrito</h1>

    function createBuyOrder(userData) {
        const buyData = {
            buyer: userData,
            items: cart,
            total: totalPriceInCart(),
            date: new Date(),
        }
        
        createBuyOrderFirestoreWithStock(buyData).then((orderId) => {clear()
        navigate(`/checkout/${orderId}`);
        Swal.fire({
            title: `Gracias por tu compra`,
            text: `Tu número de orden es ${orderId}`,
            icon: "success",
        });
    });
    }
  return (
    <div>
        <h1 className='tuCarrito'>Tu carrito</h1>
        <FlexWrapper>
        {cart.map((cartItem) => (
            <div className='item' key={cartItem.id}>
                <img src={cartItem.thumbnail} alt={cartItem.title} />
                <h3>{cartItem.title}</h3>
                <h4>${cartItem.price}</h4>
                <h4>Cantidad: {cartItem.count}</h4>
                <h4>Total: ${cartItem.count * cartItem.price}</h4>
                <Button onClick={ () => removeItem(cartItem.id) }>
                    X
                </Button>
            </div>
        ))}
        </FlexWrapper>
        <Button type="fitContent" color="#b53f3f" onClick={clear}>
            Vaciar carrito
        </Button>
        <div className='total'>
            <h2>Total: ${totalPriceInCart()}</h2>
        </div>

        <div className='form'>
            <BuyForm onSubmit={createBuyOrder} />
        </div>
    </div>
  )
}

export default CartView