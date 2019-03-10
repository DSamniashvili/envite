import React from 'react';
import '../styles/write_message.css';

const WriteMessage = () => {
    return (
        <div className="write_message_wrapper">
            <textarea className="message_area">

            </textarea>
            <div className="send_button_area"><i className="fas fa-caret-right"></i></div>
        </div>
    )
}



export default WriteMessage;