import React, { Component } from 'react';

import ProfilePageHeading from './ProfilePageHeading';
import BottomNavigation from './BottomNavigation';
import Plus from './Plus';


export default class PersonDetails extends Component {
    render() {
        return (
            <div>
                {/* <ProfilePageHeading /> */}
                <BottomNavigation />
            </div>
        )
    }
}
