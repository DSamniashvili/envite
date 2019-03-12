import React, { Component } from 'react';
import '../styles/person_details.css';

// import ProfilePageHeading from './ProfilePageHeading';
import BottomNavigation from './BottomNavigation';
import PersonDetailsForm from './PersonDetailsForm';
// import Plus from './Plus';


export default class PersonDetails extends Component {
    render() {
        return (
            <div className="person_details_wrapper">
                <button 
                    className="close_btn"
                    onClick={this.props.showBtnWithMsgQuantity}
                >X</button>
                <div className="image_profile_wrapper"><img src={'/images/nina.png'} alt="User" className="image_details" /></div>
                <PersonDetailsForm person={this.props.person}/>
                <BottomNavigation 
                profile={""}
                shapeProfile={'shape_profile'}
                classname={"done_icon"}
                icon={<i className="fas fa-check"></i>}
                />
            </div>
        )
    }
}
