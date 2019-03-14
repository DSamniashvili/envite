import React from 'react';
import logo from '../assets/envite_logo.png';


const ButtonC = (props) => {
    return (
    <div className="btn_wrapper">
    <p>{props.heading}</p>
    
        <button  className="btn"  onClick={props.onBtnPress} > 
        {/* <p className="logo_e">e</p> */}
            <img src={logo} alt="envite_logo" className={`image_login ${props.eBtnSize}`}/>
        </button>
        <div className={`${props.chatsQuantity}`}><span>{props.span}</span></div>
    </div>
    )
  }

  export default ButtonC;

