import React, { Component } from 'react';
import UpperStick from './UpperStick';
import ProfilePage from './ProfilePage';


export default class Login extends Component {
    state= {
        isLoggedIn: false,
        slideAnimation: 'slideUp',
    }

    authenticate = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    animate = () => {
        this.setState({
            slideAnimation: 'slideDown',
        })
    }
    renderView() {
        if(this.state.isLoggedIn){
            return <ProfilePage 
                animate={this.animate}
                toggleModule={this.props.toggleModule}
                slideAnimation={this.state.slideAnimation}
            />
        }
        return (
            <div className={`login_container animation ${this.state.slideAnimation}`}>
            
                <UpperStick animate={this.animate} toggleModule={this.props.toggleModule} className={'stickAndContent'} />
                <div className="login_wrapper">
                    <div className="login_image_wrapper">
                        <img src={'/images/envite_logo.png'} alt="envite_logo" className="image_login e_btn_login"/>
                    </div>        
                    <h1>Hello.</h1>
                    <p className="login_description">Note that the development build is not optimized.
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
                    <p className="powered_by">Powered by <span>eNvite</span></p>
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
