import React from 'react';

const ButtonC = (props) => {
    return (
    <div className="btn_wrapper">
    <div>Shop with friends</div>
        <button 
        className="btn e_btn"
        onClick={props.onBtnPress}
        > e
        </button>
    </div>
    )
  }

  export default ButtonC;

