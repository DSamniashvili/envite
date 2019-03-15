import React from 'react'

const UpperStick = props =>  (
    <React.Fragment>
       <div className={props.className}
       onClick={() => {props.toggleModule(); props.animate()}}
       ></div>
    </React.Fragment>
  )

export default UpperStick;
