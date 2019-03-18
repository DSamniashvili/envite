import React from 'react';


const PerParticipant = props =>  {
  return (
    <div 
        className="per_participant"
        onClick={props.shoppingBagOpen}
        >
        <div className="per_participant_left">
            <div className="participant_image">
                <img src={props.participant.img} alt="user_image" />
            </div>
            <div className="per_participant_nl">
                <p>{props.participant.name} {props.participant.lastname}</p>
            </div>
        </div>
        
        <div className="per_participant_right">
            <p>{props.participant.admin}</p>
            <i className="fas fa-chevron-right"></i>
        </div>
    </div>
  )
}

export default PerParticipant;