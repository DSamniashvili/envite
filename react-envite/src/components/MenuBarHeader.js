import React from 'react';
import ThreeLinesCentered from './ThreeLinesCentered';


const MenuBarHeader = props => (
    <React.Fragment>
        <ThreeLinesCentered
            showMessagesQuantity={props.showMessagesQuantity}
        />

        <div className="menubar_header_wrapper">
            <div className="menubar_three_lines" onClick={props.openGroupDetails} >
                <img src={props.leftImage} alt="" />
            </div>
            <div className="menubar_heading">
                <h3>{props.centerheading}</h3>
            </div>
            <div className="menubar_settings menubar_close" onClick={props.showChatFirstPage} >
                <img src={props.rightImage} alt="" />
            </div>
        </div>
    </React.Fragment>
)
export default MenuBarHeader;



