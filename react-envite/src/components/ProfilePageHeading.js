import React, { Component } from 'react'

export default class ProfilePageHeading extends Component {
  render() {
    return (
      <div className={'profileHeading_wrapper'}>
        <div className="image_profile_wrapper"><img src={'/images/bag.jpg'} alt="User" className="image_profile" /></div>
        <div className="profile_heading_text">
          <h1>{this.props.heading}</h1>
          <p>{this.props.contentText}</p>
        </div>
      </div>
    )
  }
}
