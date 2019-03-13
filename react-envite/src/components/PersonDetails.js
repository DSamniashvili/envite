import React from 'react';
import '../styles/component_styles/person_details.css';
import BottomNavigation from './BottomNavigation';
import PersonDetailsForm from './PersonDetailsForm';

import checkMark from '../assets/nounCheckMark5938940000001.png';

const PersonDetails = props => {
        return (
            <div className="person_details_wrapper">
                <button 
                    className="close_btn"
                    onClick={props.showBtnWithMsgQuantity}
                >X</button>
                <div className="image_profile_wrapper"><img src={'/images/nina.png'} alt="User" className="image_details" /></div>
                <PersonDetailsForm person={props.person}/>
                <BottomNavigation 
                profile={""}
                shapeProfile={'shape_profile'}
                classname={"done_icon"}
                icon={checkMark}
                />
            </div>
        )
}

export default PersonDetails;
