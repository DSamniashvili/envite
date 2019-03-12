import React from 'react';
import '../styles/per_chat_content.css'

import MenuBarHeader from './MenuBarHeader';
import WriteMessage from './WriteMessage';
import Messages from './Messages';

const PerChatContent = (props) => {
  return (
    <div className="per_chat_content_wrapper">
      <MenuBarHeader centerheading = {"It's all about the bag"} />
        <Messages 
        messages={props.messages}
        currentUser={props.currentUser}
        usersList={props.usersList}
        />
      <WriteMessage />
    </div>
  )
}

export default PerChatContent;
