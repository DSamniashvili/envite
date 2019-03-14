import React from 'react'

const Socials = props => {
  return (
    <ul className={props.className}>
        <li className="social_media icon"><i className="fab fa-facebook-f"></i></li>
        <li className="social_media icon"><i className="fab fa-telegram-plane"></i></li>
        <li className="social_media icon"><i className="fab fa-whatsapp"></i></li>
        <li className="social_media icon"><i className="fas fa-envelope"></i></li>
    </ul>
  )
}

export default Socials
