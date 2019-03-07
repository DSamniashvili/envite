import React, { Component } from 'react';
import UpperStick from './UpperStick';
import ProfilePage from './ProfilePage';

import '../styles/loginStyle.css';

export default class Login extends Component {
    state= {
        isLoggedIn: false
    }

    authenticate = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    renderView() {
        if(this.state.isLoggedIn){
            return <ProfilePage toggleModule={this.props.toggleModule}/>
        }
        return (
            <div className="login_container">
                <UpperStick toggleModule={this.props.toggleModule} class={'stickAndContent'} />
            <div className="login_wrapper">
                <div className="login_image_wrapper">
                    <img src={'/images/envite_logo.png'} alt="envite_logo" className="image_login"/>
                </div>        
                <h1>Hello.</h1>
                <p>Note that the development build is not optimized.
                </p>
                <div className="socials_auth_wrapper">
                    <div className="social_auth">
                        <button onClick={this.authenticate}>
                            <img src={'/images/socials/facebook.png'} alt="facebook_image" className="social_image"/>
                        </button>
                    </div>
                    <div className="social_auth">
                        <button onClick={this.authenticate}>
                        <img src={'/images/socials/google.png'} alt="google_image" className="social_image"/>
                        </button>
                    </div>
                </div>
                 <p>powered by eNvite</p>
            </div>
            </div>
        )
    }


  render() {
    return (
        <React.Fragment>
             {this.renderView()}
        </React.Fragment>      
    )
  }
}
