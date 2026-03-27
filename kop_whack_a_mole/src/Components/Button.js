import React from "react";
import "./Button.css"

function Button({ children, onClick, color = "green", hoverColor = "lightgreen" }){
    return(
        <button className = "Button"
                onClick={onClick} style={{ "--btn-color": color, "--btn-hover-color": hoverColor }}
                >{children}</button>
    );
}
export default Button;