import React from "react";
import "./style.css";

const Button = ({text, onClick, outLine})=>{
    return (
        <div className= {outLine? "btn-outLine" : "btn"} onClick={()=> onClick()}>{text}</div>
    )
}

export default Button;