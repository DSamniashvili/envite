import React from 'react';
import '../styles/component_styles/write_message.css';

import arrow from '../assets/pathCopy.png';

const WriteMessage = () => {
    return (
        <div className="write_message_wrapper">
            <textarea className="message_area">

            </textarea>
            <div className="send_button_area"><img src={arrow} alt="arrow" /></div>
        </div>
    )
}



export default WriteMessage;