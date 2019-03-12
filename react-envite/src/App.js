import React, { Component } from 'react';
import './styles/style.css';

import ButtonC from './components/ButtonC';
import Login from './components/Login';

class App extends Component {
  state={
    isHidden: true,
  }

  toggleModule = () => {
    console.log('clicked');
    this.setState({
        isHidden: !this.state.isHidden
    })
}

renderContent() {
  if(!this.state.isHidden){
    return <Login toggleModule={this.toggleModule}/>
    }
   return <ButtonC
    // chatsQuantity={"chats_quantity"} 
    chatsQuantity={""} 
    // span={'9'}
    span={''}
    heading={"Shop with friends"}
    onBtnPress = {this.toggleModule}/>
}

  render() {
    return (
      <div className="App">
      {this.renderContent()}
      
      </div>
    );
  }
}

export default App;
