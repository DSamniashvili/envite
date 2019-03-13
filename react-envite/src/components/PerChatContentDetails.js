import React from 'react';
import '../styles/component_styles/per_chat_content.css'

import MenuBarHeader from './MenuBarHeader';
import ParticipantsWrapper from './participants/ParticipantsWrapper';

import close from '../assets/nounClose2043081000000Copy.png';

const PerChatContentDetails = props => (
  <React.Fragment>
    <MenuBarHeader centerheading={"Group Info"} rightImage={close}/>
   
        

    <div className="per_chat_content_details_wrapper">
      <div className="active_chat_name">
        <div className="wrap_left">
          <div className="participant_letter"><span>s</span></div>
          <h4 className="active_chat_h4">{props.chatName}</h4>
        </div>
      <div className="per_participant_right">
        <i className="fas fa-chevron-right"></i>
      </div>
      </div>
      <div className="text_three_participants">
        <h6>3 PARTICIPANTS</h6>
      </div>
      
      <ParticipantsWrapper 
        currentUser={props.currentUser}
        usersList={props.usersList}
      />

    </div>
  </React.Fragment>
);

export default PerChatContentDetails;

