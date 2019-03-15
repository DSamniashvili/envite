import React, {
  Component
} from 'react';
import './styles/style.css';

import ButtonC from './components/ButtonC';
import Login from './components/Login';

class App extends Component {
  state = {
    isHidden: true,
  }

  toggleModule = () => {
    if (this.state.isHidden) {
      return this.setState({
        isHidden: !this.state.isHidden,
      })
    }

    setTimeout(() => {
      this.setState({
        isHidden: !this.state.isHidden,
      })
    }, 1000);
  }

  renderContent() {
    if (!this.state.isHidden) {
      return <Login isHidden = {
        this.state.isHidden
      }
      toggleModule = {
        this.toggleModule
      }
      />
    }
    return <ButtonC
    chatsQuantity = {
      ""
    }
    span = {
      ''
    }
    heading = {
      "Shop with friends"
    }
    onBtnPress = {
      this.toggleModule
    }
    />
  }

  render() {
    return ( <
      div className = "App" > {
        this.renderContent()
      } <
      /div>
    );
  }
}

export default App;