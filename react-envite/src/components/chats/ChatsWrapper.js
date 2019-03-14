import React, { Component } from 'react';
// import '../styles/component_styles/chats_in_profile.css';

import ChatItem from './ChatItem';

export default class ChatsWrapper extends Component {
  renderChats(){
    return this.props.chats.map((chat, index) => {
        return <ChatItem 
          key={index}
          chat={chat}
          openChat={this.props.openChat}
          bgColor={this.giveBGC}
          />
    })
  }

  render() {
    return (
      <div className="profile_chats_wrapper">
        <div className="profile_chats_container">
          <div className="chat_items_wrapper">
            {this.renderChats()}
          </div>
        </div>
      </div>
    )
  }
}
