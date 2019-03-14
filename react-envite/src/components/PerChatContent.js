import React, { Component } from 'react';
import '../styles/component_styles/per_chat_content.css'

import MenuBarHeader from './MenuBarHeader';
import WriteMessage from './WriteMessage';
import Messages from './Messages';
import EnviteYourFriends from './EnviteYourFriends';
import PerChatContentDetails from './PerChatContentDetails';
import ShoppingBag from './shopping/ShoppingBag';


import settings from '../assets/nounSetting1050013000000.png';
import list from '../assets/group2Copy2.png';


export default class PerChatContent extends Component {

  state={
    isDetailsOpen: false,
    isAddingParticipant: false,
    chatName: "It's all about the bag",
    isShoppingBagOpen: false,
    ownerOftheShoppingBag: null,
  }

  openGroupDetails = () => {
    this.setState({
      isDetailsOpen: true,
    })
  }

  addParticipant = () => {
    this.setState({
      isAddingParticipant: true,
      isDetailsOpen: false,
    })
  }

  shoppingBagOpen = (user) => {
    this.setState({
      isShoppingBagOpen: true,
      isAddingParticipant: false,
      isDetailsOpen: false,
    })
  }

  renderContent() {
    const { chatName } = this.state;
    if(this.state.isDetailsOpen) {
      return (
        <div className="per_chat_details_wrapper">
          <PerChatContentDetails 
          shoppingBagOpen={this.shoppingBagOpen}
          addParticipant={this.addParticipant}
          chatName={chatName}
          currentUser={this.props.currentUser}
          usersList={this.props.usersList}
          />
      </div>
      )
    }

    if(this.state.isAddingParticipant){
      return <EnviteYourFriends 
      />
    }

    if(this.state.isShoppingBagOpen){
      return <ShoppingBag 
      currentUser={this.props.currentUser}
      />
    }


    else {
      return (
        <div className="per_chat_content_wrapper">
          <MenuBarHeader 
            leftImage={list}
            centerheading = {chatName} 
            openGroupDetails={this.openGroupDetails} 
            rightImage = {settings}
            // showMessagesQuantity={this.props.showMessagesQuantity}
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
  return (
    this.renderContent()
  )
 }
}


