import React from 'react';
import MenuBarHeader from './MenuBarHeader';
import WriteMessage from './WriteMessage';

import '../styles/new_group.css';

const NewGroupPage = () => {
    return (
        <div className="new_group_wrapper">
            <MenuBarHeader centerheading={"New Group"} />
            <div className="new_group_wrapper_content">
                <h1>eNvite Your friends</h1>
                <p>Where is the best way to call your friends in?</p>
                <ul className="socials_media_wrapper">
                    <li className="social_media icon"><i className="fab fa-facebook-f"></i></li>
                    <li className="social_media icon"><i className="fab fa-telegram-plane"></i></li>
                    <li className="social_media icon"><i className="fab fa-whatsapp"></i></li>
                    <li className="social_media icon"><i className="fas fa-envelope"></i></li>
                </ul>
            </div>
            <WriteMessage />
        </div>
    )
}

export default NewGroupPage;
