import React from 'react';
import BottomNavigation from './BottomNavigation';
import PersonDetailsForm from './PersonDetailsForm';

import checkMark from '../assets/nounCheckMark5938940000001.png';
import close from '../assets/nounClose2043081000000Copy.png';

const PersonDetails = props => {
        return (
            <div className={`person_details_wrapper animation1 ${props.fadeAnimation}`}>
                <button 
                    className="close_btn"
                    onClick={props.showMessagesQuantity}
                >
               <img src={close} alt="close" />
                </button>
                <div className="image_profile_wrapper"><img src={'/images/nina.png'} alt="User" className="image_details" /></div>
                <PersonDetailsForm person={props.person}/>
                <BottomNavigation 
                profile={""}
                shadow={''}
                shapeProfile={'shape_profile'}
                classname={"done_icon"}
                icon={checkMark}
                />
            </div>
        )
}

export default PersonDetails;
