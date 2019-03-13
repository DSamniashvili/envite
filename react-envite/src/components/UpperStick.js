import React from 'react'

const UpperStick = props =>  (
    <React.Fragment>
       <div className={props.className}
       onClick={props.toggleModule}
       ></div>
    </React.Fragment>
  )

export default UpperStick;
