import React, { Component } from 'react';


class ChatItem extends Component {
  firstLetter = (name) => {
    return name.charAt(0).toLowerCase();    
  }

  firstword = (name) => {
    var stringArray = name.split(" ");
    return stringArray[0].toLowerCase();
  }

  render() {
    return (
      <div 
        className="profile_chat_item"
        onClick={this.props.openChat}
        >
          <div className="profile_chat_item_left">
            <div className={`profile_chat_item_left_fletter item_left_${this.firstword(this.props.chat.name)}`}>{this.firstLetter(this.props.chat.name)}</div>
          </div>
          <div className="profile_chat_item_right">
              <h3>{this.props.chat.name}</h3>
              <p>{this.props.chat.members}</p>
          </div>
      </div>
    )
  }
}

export default ChatItem;
