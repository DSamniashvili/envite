import React from 'react';
import logo from '../assets/logo.png';


const ButtonC = (props) => {
    return (
        <div className="btn_wrapper">
            <p>{props.heading}</p>

            <button className="btn" onClick={props.onBtnPress} >
                <img src={logo} alt="envite_logo" className={`image_login ${props.eBtnSize}`} />
            </button>
            <div className={`${props.chatsQuantity}`}><span>{props.span}</span></div>
        </div>
    )
}

export default ButtonC;

