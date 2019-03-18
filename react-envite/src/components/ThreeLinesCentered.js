import React from 'react';

const ThreeLinesCentered = props => {
  return (
    <div
      className="lines_wrapper"
      // onClick={() => {props.showMessagesQuantity(); props.animate()}}
      onClick={() => {props.showMessagesQuantity(); }}
    >
      <div className="per_line"></div>
      <div className="per_line"></div>
      <div className="per_line"></div>
    </div>
  )
}

export default ThreeLinesCentered;
