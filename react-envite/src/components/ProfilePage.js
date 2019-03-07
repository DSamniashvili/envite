import React, { Component } from 'react';
import UpperStick from './UpperStick';
import ProfilePageHeading from './ProfilePageHeading';

import '../styles/ProfileStyle.css';


export default class ProfilePage extends Component {
  render() {
    return (
      <div className="Profile_full_container">
        <UpperStick toggleModule={this.props.toggleModule} class={'stickAndContent_profile'} />
        <ProfilePageHeading />
      </div>
    )
  }
}
