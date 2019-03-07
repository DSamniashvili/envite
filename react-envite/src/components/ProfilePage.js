import React, { Component } from 'react';

import UpperStick from './UpperStick';
import ProfilePageHeading from './ProfilePageHeading';
import ChatsWrapper from './ChatsWrapper';
import BottomNavigation from './BottomNavigation';

import '../styles/ProfileStyle.css';


export default class ProfilePage extends Component {
  render() {
    return (
      <div className="Profile_full_container">
        <UpperStick toggleModule={this.props.toggleModule} class={'stickAndContent_profile'} />
        <ProfilePageHeading />
        <div className="profile_chat_heading">
          <h3>shopica chats</h3>
        </div>
        <ChatsWrapper />
        <div className="new_shopping_journey">
          <p>New shopping Journey!</p>
        </div>
        <BottomNavigation />
      </div>
    )
  }
}
