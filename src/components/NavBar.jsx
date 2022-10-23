import React from "react";
import NewsBar from "./NewsBar/NewsBar.jsx";
import Button from "./Button/Button.jsx";
import CartWidget from "./CartWidget/CartWidget";
import Logo from "./Logo/logotipo.svg";
import "./navbar.css";

function NavBar(){
    return (
        <>
        <div>
            <NewsBar className="newsBar">SOLO POR HOY, <strong>10% OFF</strong> EN TODA LA TIENDA</NewsBar>
        </div>
        <div className="logo">
            <img src={Logo} alt="Logo"></img>
        </div>
        <div className="categorias">
            <Button>Por producto</Button>
            <Button>Por marca</Button>
            <Button>Hombre</Button>
            <Button>Mujer</Button>
            <Button>Niños</Button>
        </div>
        <div className="carrito">
            <CartWidget/>
        </div>
    </>
    )
}

export default NavBar;