import { useState } from "react";
import "./button.css";

function Button(props) {
  const [colorState, setColorState] = useState({
    backgroundColor: props.color,
    width: props.width,
    height: props.height,
    boxShadow: props.shadow
  });

  return (
    <button onClick={props.onClick} style={colorState} className="btn">
      {props.children}
    </button>
  );
}
export default Button;