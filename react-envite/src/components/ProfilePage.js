import React, { Component } from 'react';

import UpperStick from './UpperStick';
import ProfilePageHeading from './ProfilePageHeading';
import ChatsWrapper from './chats/ChatsWrapper';
import BottomNavigation from './BottomNavigation';
import ButtonC from './ButtonC';


import NewGroupPage from './NewGroupPage';
import PerChatContent from './PerChatContent';
import PersonDetails from './PersonDetails';
import ButtonWithMessages from './ButtonWithMessages';


import plus from '../assets/group2Copy.png';
import { connect } from 'react-redux';

class ProfilePage extends Component {
  state = {
    isAddingNewChat: false,
    isOpenPerChat: false,
    isPersonDetailsSelected: false,
    usersList: this.props.users,
    personSelected: this.props.users[0],
    profilePageRendered: false,
    messages: this.props.users[0].chats[0].content,
    groupDetailsOpen: false,
    showButtonWithMessageQ: false,
    fadeAnimation: 'fadeIn',
  }


  showMessagesQuantity = () => { 
    if (!this.state.showButtonWithMessageQ) 
      return setTimeout(() => {
          this.setState({
            showButtonWithMessageQ: !this.state.showButtonWithMessageQ,
            fadeAnimation: 'fadeIn',

            isAddingNewChat: false,
            isOpenPerChat: false,
            isPersonDetailsSelected: false,
            groupDetailsOpen: false,
            profilePageRendered: false,

          })
        }, 500);

    this.setState({
      showButtonWithMessageQ: !this.state.showButtonWithMessageQ,
      fadeAnimation: 'fadeIn',

      isAddingNewChat: false,
      isOpenPerChat: false,
      isPersonDetailsSelected: false,
      groupDetailsOpen: false,
      profilePageRendered: false,
    })
  }



  newJourney = () => {
    this.setState({
      isAddingNewChat: !this.state.isAddingNewChat
    })
  }
  openChat = () => {
    this.setState({
      isOpenPerChat: true
    })
  }
  openPersonDetails = () => {
    this.setState({
      isPersonDetailsSelected: true,
    })
  }


  renderView() {
    let person = this.state.personSelected;

    if (this.state.showButtonWithMessageQ) {
      return <ButtonWithMessages
        showMessagesQuantity={this.showMessagesQuantity}
        chatsQuantity={"chats_quantity"}
        span={this.state.messages.length}
        messages={this.state.messages}
        topMessage={this.state.messages[this.state.messages.length-2]}
        bottomMessage={this.state.messages[this.state.messages.length-1]}
      />
    }

    if (this.state.isAddingNewChat) {
      return <NewGroupPage 
      fadeAnimation={this.state.fadeAnimation}
      showMessagesQuantity={()=> {
        this.setState({fadeAnimation: 'slideDown'})
        this.showMessagesQuantity();
      }
      }
      />
    }
    if (this.state.isOpenPerChat) {
      return <PerChatContent
        messages={this.state.messages}
        currentUser={this.state.personSelected}
        usersList={this.state.usersList}
        openGroupDetails={this.openGroupDetails}
        showMessagesQuantity={this.showMessagesQuantity}
      />
    }
    if (this.state.isPersonDetailsSelected) {
      return <PersonDetails
        person={person}
        fadeAnimation={this.state.fadeAnimation}
        showMessagesQuantity={()=> {
        this.setState({fadeAnimation: 'slideDown'})
        this.showMessagesQuantity();
      }}
      />
    }
    if (this.state.profilePageRendered) {
      return <ButtonC />
    }
    return (
      <div className={`Profile_full_container animation ${this.props.slideAnimation}`}>
        <UpperStick
          animate={this.props.animate}
          toggleModule={this.props.toggleModule}
          className={'stickAndContent_profile'}
        />
        <div className="profile_content_background">
          <ProfilePageHeading
            heading={`Welcome ${person.name}.`}
            contentText={"you're almost ready to start your shopping date."}
          />
          <div className="profile_chat_heading">
            <h3>Shopica Chats</h3>
          </div>
          <ChatsWrapper
            openChat={this.openChat}
            chats={person.chats}
          />
          <div className="new_shopping_journey">
            <p>New shopping Journey!</p>
          </div>
        </div>
        <BottomNavigation
          wrapperClass={"profile_bottom_nav"}
          shapeProfile={""}
          shadow={"bottom_navigation_shadow"}
          profile={"profile_bottom_navigation_profile"}
          newJourney={this.newJourney}
          openPersonDetails={this.openPersonDetails}
          classname={"plus_icon"}
          icon={plus}
        />
      </div>
    )
  }


  render() {
    return (
      this.renderView()
    )
  }
};

function mapStateToProps(state) {
  return {
    users: state.users,
  }
}


export default connect(mapStateToProps)(ProfilePage);