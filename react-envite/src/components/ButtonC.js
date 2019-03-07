import React from 'react';

const ButtonC = (props) => {
    return (
    <div className="btn_wrapper">
    <p>Shop with friends</p>
        <button 
        className="btn e_btn"
        onClick={props.onBtnPress}
        > e
        </button>
    </div>
    )
  }

  export default ButtonC;

