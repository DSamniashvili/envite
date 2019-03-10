import React, { Component } from 'react';

import UpperStick from './UpperStick';
import ProfilePageHeading from './ProfilePageHeading';
import ChatsWrapper from './ChatsWrapper';
import BottomNavigation from './BottomNavigation';
import NewGroupPage from './NewGroupPage';



import '../styles/ProfileStyle.css';


export default class ProfilePage extends Component {
  state = {
    isAddingNewChat: false,
  }


  newJourney = () => {
    console.log('plus button - new journey was clicked');
    this.setState({
      isAddingNewChat: true
    })
  }


  renderView() {
    if (this.state.isAddingNewChat) {
      return <NewGroupPage />
    }

    return (
      <div className="Profile_full_container">
        <UpperStick toggleModule={this.props.toggleModule} class={'stickAndContent_profile'} />
        <ProfilePageHeading
          heading={'Welcome'}
          contentText={"You're almost ready to start your shopping date."}
        />
        <div className="profile_chat_heading">
          <h3>shopica chats</h3>
        </div>
        <ChatsWrapper />
        <div className="new_shopping_journey">
          <p>New shopping Journey!</p>
        </div>
        <BottomNavigation newJourney={this.newJourney} />
      </div>
    )
  }



  render() {
    return (
      this.renderView()
    )
  }
}
