import React from 'react'

const UpperStick = (props) => {
  return (
    <React.Fragment>
       <div className={props.class}
       onClick={props.toggleModule}
       ></div>
    </React.Fragment>
  )
}

export default UpperStick;
