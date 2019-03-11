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
                <div className="image_profile_wrapper"><img src={'/images/nina.png'} alt="User" className="image_details" /></div>
                <PersonDetailsForm person={this.props.person}/>
                <BottomNavigation 
                shapeProfile={'shape_profile'}
                classname={"done_icon"}
                icon={'#'}
                />
            </div>
        )
    }
}
