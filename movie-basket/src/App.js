import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieCollection from './components/MovieCollection.js';
import Dropdown from './components/Dropdown.js';
import DropdownItem from './components/DropdownItem.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{marginLeft: "400px"}}>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
        <MovieCollection/>
        </div>
      </div>
    );
  }
}

export default App;
