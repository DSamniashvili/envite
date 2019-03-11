import React, { Component } from 'react';
import '../styles/ProfileStyle.css';


import UpperStick from './UpperStick';
import ProfilePageHeading from './ProfilePageHeading';
import ChatsWrapper from './ChatsWrapper';
import BottomNavigation from './BottomNavigation';
import NewGroupPage from './NewGroupPage';
import PerChatContent from './PerChatContent';
import PersonDetails from './PersonDetails';


import { connect } from 'react-redux';

class ProfilePage extends Component {
  state = {
    isAddingNewChat: false,
    isOpenPerChat: false,
    isPersonDetailsSelected: false,
    personSelected: this.props.users[0],
  }


  newJourney = () => {
    console.log('plus button - new journey was clicked');
    this.setState({
      isAddingNewChat: true
    })
  }
  openChat = () => {
    console.log('clicked - A chat is opened');
    this.setState({
      isOpenPerChat: true
    })
  }
  openPersonDetails = () => {
    console.log('clicked - A person details page is open');
    this.setState({
      isPersonDetailsSelected: true,
    })
  }


  renderView() {
    let person = this.state.personSelected;

    if (this.state.isAddingNewChat) {
      return <NewGroupPage />
    }
    if (this.state.isOpenPerChat) {
      return <PerChatContent />
    }
    if (this.state.isPersonDetailsSelected) {
      return <PersonDetails person={person} />
    }

    return (
      <div className="Profile_full_container">
        <UpperStick toggleModule={this.props.toggleModule} class={'stickAndContent_profile'} />
          <div className="profile_content_background">
              <ProfilePageHeading
              heading={`Welcome ${person.name}.`}
              contentText={"You're almost ready to start your shopping date."}
            />
            <div className="profile_chat_heading">
              <h3>shopica chats</h3>
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
        newJourney={this.newJourney}
        openPersonDetails={this.openPersonDetails} 
        classname={"plus_icon"}
        icon={'+'}
         />
      </div>
    )
  }


  render() {
    console.log(this.props.users);
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