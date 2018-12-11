import React, { Component } from 'react';
import './App.css';
import CSLContainer from './ConsolidatedScreeningList/CSLContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <CSLContainer />
      </div>
    );
  }
}

export default App;
