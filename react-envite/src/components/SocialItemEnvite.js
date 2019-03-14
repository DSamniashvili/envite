import React from 'react'
import leftArrow from '../assets/arrowRight.png';


const SocialItemEnvite = props => {
  return (
    <React.Fragment>
      <div className="social_item_wrapper">
            <div className="wrap_left_social">
              <div className="social_media_envite icon ">
                 <i className={props.i}></i>
             </div>
              <span>{props.name}</span>
            </div>
            <img src ={leftArrow} alt="left arrow"/>
          </div>
    </React.Fragment>
  )
}

export default SocialItemEnvite;