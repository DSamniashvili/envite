import React, { Component } from 'react';

import '../styles/bottom_navigation.css';

export default class BottomNavigation extends Component {
  render() {
    return (
          <div className="profile_bottom_navigation">
            <div className="shape"></div>
            <div className="plus_icon"><span>+</span></div>
            <ul className="profile_bottom_navigation_wrapper">
              <li className="bottom_icon"><i class="far fa-user"></i></li>
              <li className="bottom_icon"><i class="far fa-star"></i></li>
              <li className="bottom_icon"></li>
              <li className="bottom_icon"><i class="far fa-clock"></i></li>
              <li className="bottom_icon"><i class="fas fa-cog"></i></li> 
            </ul>
          </div>

    )
  }
}
