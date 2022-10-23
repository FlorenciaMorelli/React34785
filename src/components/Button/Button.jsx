import React from 'react';
import "./button.css";

function Button(props) {
  return (
    <button className="navButton">{props.children}</button>
    )
}

export default Button;