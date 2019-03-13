import React, { Component } from 'react';
// import '../styles/component_styles/ProfileStyle.css';


import UpperStick from './UpperStick';
import ProfilePageHeading from './ProfilePageHeading';
import ChatsWrapper from './chats/ChatsWrapper';
import BottomNavigation from './BottomNavigation';
import NewGroupPage from './NewGroupPage';
import PerChatContent from './PerChatContent';
import PersonDetails from './PersonDetails';
import ButtonC from './ButtonC';
// import PerChatContentDetails from './PerChatContentDetails';

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
  showBtnWithMsgQuantity = () => {
    console.log('clicked - button with message quantity shown');
    this.setState({
      profilePageRendered: !this.state.profilePageRendered,
      isPersonDetailsSelected: !this.state.isPersonDetailsSelected
    })
    console.log(this.state)
  }

  // openGroupDetails = () => {
  //   console.log('clicked - Group details got opened');
  //   this.setState({
  //     groupDetailsOpen: true,
  //     isOpenPerChat: false,
  //   })
  // }




  renderView() {
    console.log(this.state.messages);
    let person = this.state.personSelected;

    if (this.state.isAddingNewChat) {
      return <NewGroupPage />
    }
    if (this.state.isOpenPerChat) {
      return <PerChatContent 
        messages={this.state.messages}
        currentUser={this.state.personSelected}
        usersList={this.state.usersList}
        openGroupDetails={this.openGroupDetails}
        />
    }
    if (this.state.isPersonDetailsSelected) {
      return <PersonDetails 
      person={person}
      showBtnWithMsgQuantity={this.showBtnWithMsgQuantity}
      />
    }
    if (this.state.profilePageRendered) {
      return <ButtonC/>
    }
    // if (this.state.groupDetailsOpen) {
    //   return <PerChatContentDetails />
    // }

    return (
      <div className="Profile_full_container">
        <UpperStick toggleModule={this.props.toggleModule} className={'stickAndContent_profile'} />
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
             {/* <div className="arrow"> */}
               {/* <img src="../assets/fIll104.png" alt="arrow" /> */}
             {/* </div> */}
            <div className="new_shopping_journey">
              <p>New shopping Journey!</p>
        </div>
          </div>
        <BottomNavigation 
        wrapperClass={"profile_bottom_nav"}
        shapeProfile={""}
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
    // console.log(this.props.users);
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