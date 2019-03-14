import React, { Component } from 'react';
import PerParticipant from './PerParticipant';
import ParticipantActions from './ParticipantActions';

import AddPaticipant from '../../assets/group3.png'
import DeleteGroup from '../../assets/nounDelete2025414000000.png'

export default class ParticipantsWrapper extends Component {
    renderParticipants(){
        return this.props.usersList.map((participant, index) => {
            return (
              <PerParticipant 
                key={index} 
                participant = {participant}
                shoppingBagOpen = {this.props.shoppingBagOpen} />
            )
        }) 
    }

    renderContent() {
      return (
        <React.Fragment>
          <div className="participants_wrapper">
              {this.renderParticipants()}
          </div>
          <div className="participants_actions_wrapper">
            <ParticipantActions name={'addIcon'} actionIcon={AddPaticipant} actionText={'Add Participants'} addParticipant={this.props.addParticipant}/>
            <div className="grey_background"></div>
            <ParticipantActions name={'deleteIcon'} actionIcon={DeleteGroup} actionText={'Delete Group'}/>
          </div>
          
        </React.Fragment>
      )
    }
    
  render() {
    return (
      this.renderContent()
    )
  }
}
