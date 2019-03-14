import React from 'react';
import Plus from './Plus';
import '../styles/component_styles/bottom_navigation.css';

import user from '../assets/nounUser11228000000001.png';
import star from '../assets/nounStar2097830000000.png';
import clock from '../assets/nounHistory576599000000.png';
import setting from '../assets/nounSettings1187813000000.png';

 const BottomNavigation = props => {
    return (
      <div className={`profile_bottom_navigation ${props.profile}`}>
      <div className={`${props.shadow}`}></div>
      <div className="bottom_navigation_image"></div>
        <Plus
          newJourney={props.newJourney}
          icon={props.icon}
          classname={props.classname}
        />
        < ul className={`profile_bottom_navigation_wrapper ${props.wrapperClass}`}>
          <li className="bottom_icon" onClick={props.openPersonDetails} ><img src={user} alt="User" /></li>
          <li className="bottom_icon"><img src={star} alt="star" /></li>
          <li className="bottom_icon"></li>
          <li className="bottom_icon"><img src={clock} alt="clock" /></li>
          <li className="bottom_icon"><img src={setting} alt="setting" /></li>
        </ul>
      </div>

    )
}
export default BottomNavigation;

