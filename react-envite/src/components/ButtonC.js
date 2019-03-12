import React from 'react';

const ButtonC = (props) => {
    return (
    <div className="btn_wrapper">
    <p><strong>{props.heading}</strong></p>
    
        <button  className="btn"  onClick={props.onBtnPress} > 
        {/* e_btn  */}
            <img src={'/images/envite_logo.png'} alt="envite_logo" className={`image_login ${props.eBtnSize}`}/>
        </button>
        <div className={`${props.chatsQuantity}`}><span>{props.span}</span></div>
    </div>
    )
  }

  export default ButtonC;

