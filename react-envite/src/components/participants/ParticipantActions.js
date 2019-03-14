import React from 'react';



const ParticipantActions = props => {
  return (
    <div className={`participant_actions_wrapper participant_actions_wrapper_${props.name}`}
    onClick={props.addParticipant}>
        <div className={`participant_action_icon participant_action_icon_${props.name}`}>
            <img src={props.actionIcon} alt="action icon"/>
        </div>
        <div className={`participant_action_text participant_action_text_${props.name}`}>
            {props.actionText}
        </div>
    </div>
  )
}

export default ParticipantActions
