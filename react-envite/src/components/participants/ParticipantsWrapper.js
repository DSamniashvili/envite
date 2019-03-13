import React, { Component } from 'react';
import PerParticipant from './PerParticipant';

export default class ParticipantsWrapper extends Component {

    renderParticipants(){
        return this.props.usersList.map((participant, index) => {
            return <PerParticipant 
            key={index}
            participant = {participant}
            />
        }) 
    }

  render() {
    return (
      <React.Fragment>
        <div className="participants_wrapper">
            {this.renderParticipants()}
        </div>
        <div>
            
        </div>
      </React.Fragment>
    )
  }
}
