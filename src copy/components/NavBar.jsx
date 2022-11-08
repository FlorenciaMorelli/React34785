import React from "react";
import NewsBar from "./NewsBar/NewsBar.jsx";
import Button from "./Button/Button.jsx";
import CartWidget from "./CartWidget/CartWidget";
import Logo from "./Logo/logotipo.svg";
import {Link} from "react-router-dom"
import "./navbar.css";

function NavBar(){
    return (
        <>
        <div>
            <NewsBar className="newsBar">SOLO POR HOY, <strong>10% OFF</strong> EN TODA LA TIENDA</NewsBar>
        </div>
        <div className="logo">
            <Link to="/">
                <img src={Logo} alt="Logo"></img>
            </Link>
        </div>
        <div className="categorias">
            <Link to="/category/Urbanas">
                <Button>Urbanas</Button>
                </Link>
            <Link to="/category/Running">
                <Button>Running</Button>
            </Link>
            <Link to="/category/Training">
                <Button>Training</Button>
            </Link>
            <Link to="/category/Tenis">
                <Button>Tenis</Button>
            </Link>
            <Link to="/category/Ojotas">
                <Button>Ojotas</Button>
            </Link>
        </div>
        <div className="carrito">
            <CartWidget/>
        </div>
    </>
    )
}

export default NavBar;