import React, { Component } from 'react';
import './App.css';
// import CSLContainer from './ConsolidatedScreeningList/CSLContainer';
import CSLContainer from './ConsolidatedScreeningList/CSLWidget';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CSLContainer />
      </div>
    );
  }
}

export default App;
