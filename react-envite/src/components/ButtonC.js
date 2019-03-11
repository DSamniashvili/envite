import React from 'react';

const ButtonC = (props) => {
    return (
    <div className="btn_wrapper">
    <p><strong>Shop with friends</strong></p>
        <button 
        className="btn"
        // e_btn
        onClick={props.onBtnPress}
        > 
            <img src={'/images/envite_logo.png'} alt="envite_logo" className="image_login"/>
        </button>
    </div>
    )
  }

  export default ButtonC;

