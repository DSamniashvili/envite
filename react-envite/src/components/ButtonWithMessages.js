import React from 'react';
import logo from '../assets/envite_logo.png';

const ButtonWithMessages = props => {
    return (
        <div className="btn_wrapper_messages">
            <div className="unread_messages_wrapper">
                <div className="top_message message_btn_message semi_transparent">
                    <img src={`/${props.topMessage.img}`} alt="user_image"/>
                    <p>{props.topMessage.textContent}</p>
                </div>
                <div className="bottom_message message_btn_message">
                <img src={`/${props.bottomMessage.img}`} alt="user_image"/>
                    <p>{props.bottomMessage.textContent}</p>
                </div>
            </div>
            <div className="btn">
                <button onClick={props.showMessagesQuantity} >
                    <img src={logo} alt="envite_logo" className={`image_login ${props.eBtnSize}`} />
                </button>
                <div className={`${props.chatsQuantity}`}><span>{props.span}</span></div>
            </div>
        </div>
    )
}

export default ButtonWithMessages;
