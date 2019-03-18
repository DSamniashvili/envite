import React from 'react';
import MenuBarHeader from './MenuBarHeader';
import SocialItemEnvite from './SocialItemEnvite';

import arrowWhite from '../assets/arrowRightWhite.png';

const EnviteYourFriends = props => {
  return (
    <div className={`wrapper_envite_friends animation1 ${props.fadeAnimation}`}>
      <MenuBarHeader
        centerheading={'eNvite your friends'}
        rightImage={arrowWhite}
        showMessagesQuantity={props.showMessagesQuantity}
      />
      <div className='socials_media_wrapper_envite'>
        <SocialItemEnvite i={"fab fa-facebook-f"} name={'Facebook'} />
        <SocialItemEnvite i={"fab fa-telegram-plane"} name={'Telegram'} />
        <SocialItemEnvite i={"fab fa-whatsapp"} name={'WhatsApp'} />
        <SocialItemEnvite i={"fas fa-envelope"} name={'Email'} />
      </div>
      <div className="grey_long">
      </div>
    </div>
  )
}

export default EnviteYourFriends;

