import React, {Component} from 'react';
import '../styles/per_chat_content.css'

export default class Messages extends Component {
  checkIfUser = () => {
    const { messages, currentUser } = this.props;
    
    return messages.map((message, index) => {
    if(currentUser.name !== message.name) {
        return (
          <div className="message_msg message_guest" key={index}>
          <div className="message_person_image">
           <img src={message.img} alt="user_image" className="chat_image"/>
          </div>
            <div className="message_person_name_content">
                <h5>{message.name} {message.lastname}</h5>
                <p>{message.textContent}</p>
            </div>
          </div>
        )
      }
      else {
        return (
          <div className="message_msg message_user" key={index}>
          <div className="message_person_image">
           <img src={message.img} alt="user_image" className="chat_image"/>
          </div>
            <div className="message_person_name_content">
                <p>{message.textContent}</p>
            </div>
          </div>
        )
      }
    }) 
  }

  render() {
    return (
      <div className="messages_container">
        <div className="message_wrapper">
          {this.checkIfUser()}
        </div>
      </div>
    )
  }
}

