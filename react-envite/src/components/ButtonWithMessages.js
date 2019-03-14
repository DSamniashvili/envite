import React from 'react';
import logo from '../assets/envite_logo.png';

const ButtonWithMessages = (props) => {
    return (
        <div className="btn_wrapper">
            <button className="btn" onClick={props.showMessagesQuantity} >
                <img src={logo} alt="envite_logo" className={`image_login ${props.eBtnSize}`} />
            </button>
            <div className={`${props.chatsQuantity}`}><span>{props.span}</span></div>
        </div>
    )
}

export default ButtonWithMessages;
