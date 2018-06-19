import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <Header />
        <Menu />
      </div>
    );
  }
}

export default App;
