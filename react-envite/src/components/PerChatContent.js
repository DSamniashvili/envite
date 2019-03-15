//It's all about the bag - first page

import React, { Component } from 'react';
import '../styles/component_styles/per_chat_content.css'

import MenuBarHeader from './MenuBarHeader';
import WriteMessage from './WriteMessage';
import Messages from './Messages';
// import ButtonWithMessages from './ButtonWithMessages';

import PerChatContentDetails from './PerChatContentDetails';
import EnviteYourFriends from './EnviteYourFriends';
import ShoppingBag from './shopping/ShoppingBag';


import settings from '../assets/nounSetting1050013000000.png';
import list from '../assets/group2Copy2.png';

// import { connect } from 'react-redux';


class PerChatContent extends Component {

  state = {
    isDetailsOpen: false,
    isAddingParticipant: false,
    chatName: "It's all about the bag",
    isShoppingBagOpen: false,
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

  renderContent() {
    const { chatName } = this.state;

    if (this.state.isDetailsOpen) {
      return (
        <PerChatContentDetails
          shoppingBagOpen={this.shoppingBagOpen}
          addParticipant={this.addParticipant}
          chatName={chatName}
          currentUser={this.props.currentUser}
          usersList={this.props.usersList}
          showMessagesQuantity={this.props.showMessagesQuantity}
          showChatFirstPage={this.showChatFirstPage}
        />
      )
    }

    if (this.state.isAddingParticipant) {
      return <EnviteYourFriends
        showMessagesQuantity={this.props.showMessagesQuantity}
      />
    }

    if (this.state.isShoppingBagOpen) {
      return <ShoppingBag
        currentUser={this.props.currentUser}
        showMessagesQuantity={this.props.showMessagesQuantity}
      />
    }

    return (
      <div className="per_chat_content_wrapper">
        <MenuBarHeader
          leftImage={list}
          centerheading={chatName}
          openGroupDetails={this.openGroupDetails}
          rightImage={settings}
          showMessagesQuantity={this.props.showMessagesQuantity}
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



