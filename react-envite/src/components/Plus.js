import React from 'react'

const Plus = props => (
        <div
            className={props.classname}
            onClick={props.newJourney}
        >
         <span><img src ={props.icon} alt="main icon"/></span>   
        </div>
    )

export default Plus;
