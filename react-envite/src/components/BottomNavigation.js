import React, { Component } from 'react';

import Plus from './Plus';

import '../styles/bottom_navigation.css';

export default class BottomNavigation extends Component {
  render() {
    return (
      <div className="profile_bottom_navigation">
        <div className="shape"></div>
        <Plus
          newJourney={this.props.newJourney}
          icon={'+'}
        />
        < ul className="profile_bottom_navigation_wrapper">
          <li className="bottom_icon"><i className="far fa-user"></i></li>
          <li className="bottom_icon"><i className="far fa-star"></i></li>
          <li className="bottom_icon"></li>
          <li className="bottom_icon"><i className="far fa-clock"></i></li>
          <li className="bottom_icon"><i className="fas fa-cog"></i></li>
        </ul>
      </div>

    )
  }
}
