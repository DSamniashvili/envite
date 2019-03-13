import React from 'react';
import '../styles/component_styles/MenuBar.css';

import list from '../assets/group2Copy2.png';

const MenuBarHeader = props =>  (
            <div className="menubar_header_wrapper">
                <div 
                    className="menubar_three_lines"
                    onClick={props.openGroupDetails}
                >
                    <img src={list} alt="list"/></div>
                <div className="menubar_heading"><h3>{props.centerheading}</h3></div>
                <div className="menubar_settings" > 
                    <img src={props.rightImage} alt="icon_right"/> 
                </div>
            </div>
        )

export default MenuBarHeader;
