import React from 'react'

const Plus = props => {
    // console.log(props)
    return (
        <div
            className={props.classname}
            onClick={props.newJourney}
        >
         <span>{props.icon}</span>   
        </div>
    )
}

export default Plus;
