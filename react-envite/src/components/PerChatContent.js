//It's all about the bag - first page

import React, { Component } from 'react';
// import '../styles/component_styles/per_chat_content.css'

import MenuBarHeader from './MenuBarHeader';
import WriteMessage from './WriteMessage';
import Messages from './Messages';
// import ButtonWithMessages from './ButtonWithMessages';

import PerChatContentDetails from './PerChatContentDetails';
import EnviteYourFriends from './EnviteYourFriends';
import ShoppingBag from './shopping/ShoppingBag';


import settings from '../assets/nounSetting1050013000000.png';
import list from '../assets/group2Copy2.png';


class PerChatContent extends Component {

  state = {
    isDetailsOpen: false,
    isAddingParticipant: false,
    chatName: "It's all about the bag",
    isShoppingBagOpen: false,
    fadeAnimation: 'fadeIn',
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

  shoppingBagOpen = () => {
    this.setState({
      isShoppingBagOpen: true,
      isAddingParticipant: false,
      isDetailsOpen: false,
    })
  }

  showChatFirstPage = () => {
    this.setState({
    isDetailsOpen: false,
    isAddingParticipant: false,
    chatName: "It's all about the bag",
    isShoppingBagOpen: false,
    })
  }

  animate = () => {
    this.setState({
        fadeAnimation: 'fadeOut'
    })
}



  renderContent() {
    console.log(this.props)
    const { chatName } = this.state;

    if (this.state.isDetailsOpen) {
      return (
        <PerChatContentDetails
          fadeAnimation={this.state.fadeAnimation}
          animate={this.animate}
          shoppingBagOpen={this.shoppingBagOpen}
          addParticipant={this.addParticipant}
          chatName={chatName}
          currentUser={this.props.currentUser}
          usersList={this.props.usersList}
          // showMessagesQuantity={this.props.showMessagesQuantity}
          showMessagesQuantity={() => {
            this.props.showMessagesQuantity();
            this.setState({fadeAnimation: 'slideDown'});
          }}
          showChatFirstPage={this.showChatFirstPage}
        />
      )
    }

    if (this.state.isAddingParticipant) {
      return <EnviteYourFriends
        // showMessagesQuantity={this.props.showMessagesQuantity}
        // animate={this.animate}
        fadeAnimation={this.state.fadeAnimation}
        showMessagesQuantity={() => {
          this.props.showMessagesQuantity();
          this.setState({fadeAnimation: 'slideDown'});
        }}
      />
    }

    if (this.state.isShoppingBagOpen) {
      return <ShoppingBag
        fadeAnimation={this.state.fadeAnimation}
        animate={this.animate}
        currentUser={this.props.currentUser}
        // showMessagesQuantity={this.props.showMessagesQuantity}
        showMessagesQuantity={() => {
          this.props.showMessagesQuantity();
          this.setState({fadeAnimation: 'slideDown'});
        }}
      />
    }

    return (
      <div className={`per_chat_content_wrapper animation1 ${this.state.fadeAnimation}`}>
        <MenuBarHeader
          leftImage={list}
          centerheading={chatName}
          openGroupDetails={this.openGroupDetails}
          rightImage={settings}
          showMessagesQuantity={() => {
            this.props.showMessagesQuantity();
            this.setState({fadeAnimation: 'slideDown'});
          }}
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


  render() {
    return (
      this.renderContent()
    )
  }
}

export default PerChatContent;



