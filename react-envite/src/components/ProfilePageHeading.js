import React from 'react';

const ProfilePageHeading = props => (
      <div className={'profileHeading_wrapper'}>
        <div className="image_profile_wrapper"><img src={'/images/nina.png'} alt="User" className="image_profile" /></div>
        <div className="profile_heading_text">
          <h1>{props.heading}</h1>
          <p>{props.contentText}</p>
        </div>
      </div>
    )

export default ProfilePageHeading;