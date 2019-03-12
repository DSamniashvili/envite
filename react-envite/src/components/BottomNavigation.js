import React, { Component } from 'react';

import Plus from './Plus';

import '../styles/bottom_navigation.css';

export default class BottomNavigation extends Component {
  render() {
    return (
      <div className={`profile_bottom_navigation ${this.props.profile}`}>
        <img src={'/images/bottom_navigation.png'} alt="bottom_navogaton_img" className="profile_bottom_navigation_image" />
        <Plus
          newJourney={this.props.newJourney}
          icon={this.props.icon}
          classname={this.props.classname}
        />
        < ul className={`profile_bottom_navigation_wrapper ${this.props.wrapperClass}`}>
          <li className="bottom_icon" onClick={this.props.openPersonDetails}><i className="far fa-user"></i></li>
          <li className="bottom_icon"><i className="far fa-star"></i></li>
          <li className="bottom_icon"></li>
          <li className="bottom_icon"><i className="far fa-clock"></i></li>
          <li className="bottom_icon"><i className="fas fa-cog"></i></li>
        </ul>
      </div>

    )
  }
}

//profile_bottom_navigation_profile
