import React from 'react';
import MenuBarHeader from './MenuBarHeader';
import WriteMessage from './WriteMessage';
import Socials from './Socials';
// import MenuBarHeader from './MenuBarHeader';

// import '../styles/component_styles/new_group.css';


const NewGroupPage = props => {
    return (
        <div className={`new_group_wrapper animation1 ${props.fadeAnimation}`}>
            <MenuBarHeader 
                showMessagesQuantity={props.showMessagesQuantity}
                centerheading={"New Group"}
                />
            <div className="new_group_wrapper_content">
                <h1>eNvite Your friends</h1>
                <p>Where is the best way to call your friends in?</p>
                <Socials className={'socials_media_wrapper'}/>
            </div>
            <WriteMessage />
        </div>
    )
}

export default NewGroupPage;
