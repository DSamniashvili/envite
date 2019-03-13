import React, { Component } from 'react';
import '../styles/component_styles/per_chat_content.css'

import MenuBarHeader from './MenuBarHeader';
import WriteMessage from './WriteMessage';
import Messages from './Messages';


import PerChatContentDetails from './PerChatContentDetails';
import setting from '../assets/nounSetting1050013000000.png';


export default class PerChatContent extends Component {

  state={
    isDetailsOpen: false,
    chatName: "It's all about the bag",
  }

  openGroupDetails = () => {
    this.setState({
      isDetailsOpen: true,
    })
  }

  renderContent() {
    const { chatName } = this.state;
    if(this.state.isDetailsOpen) {
      return (
        <div className="per_chat_details_wrapper">
          <PerChatContentDetails 
          chatName={chatName}
          currentUser={this.props.currentUser}
          usersList={this.props.usersList}
          />
      </div>
      )
    }
    else {
      return (
        <div className="per_chat_content_wrapper">
          <MenuBarHeader 
            centerheading = {chatName} 
            openGroupDetails={this.openGroupDetails} 
            rightImage = {setting}
          />
            <Messages 
              messages={this.props.messages}
              currentUser={this.props.currentUser}
              usersList={this.props.usersList}
            />
            <WriteMessage />
        </div>
      )
    }
  }


 render() {
   console.log(this.props)
  return (
    this.renderContent()
  )
 }
}


