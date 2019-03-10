import React, { Component } from 'react';
import '../styles/chats_in_profile.css';

import ChatItem from './ChatItem';

export default class ChatsWrapper extends Component {
  render() {
    return (
      <div className="profile_chats_wrapper">
        <div className="profile_chats_container">
          <div className="chat_items_wrapper">
            <ChatItem />
            <ChatItem />
            <ChatItem />
          </div>
        </div>
      </div>
    )
  }
}
