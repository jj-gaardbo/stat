import React, { Component } from 'react';
import logo from './assets/images/logo.png';
import SCSS from './assets/scss/app.scss';
import WelcomeMessage from './components/WelcomeMessage.jsx';

const appData = {
    title: 'ReactElectron Demo App'
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <WelcomeMessage data={appData}/>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}
