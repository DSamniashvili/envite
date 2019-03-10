import React, { Component } from 'react';
import '../styles/MenuBar.css';

export default class MenuBarHeader extends Component {
    render() {
        return (
            <div className="menubar_header_wrapper">
                <div className="menubar_three_lines"><i className="fas fa-list"></i></div>
                <div className="menubar_heading">New Group</div>
                <div className="menubar_settingsd"><i className="fas fa-cog"></i></div>
            </div>
        )
    }
}
