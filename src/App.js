import React, { Component } from 'react';
import './App.css';
// import CSLContainer from './ConsolidatedScreeningList/CSLContainer';
// import CSLContainer from './ConsolidatedScreeningList/CSLWidget';
import SearchContainer from './SearchWidget/SearchContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CSLContainer /> */}
        <SearchContainer />
      </div>
    );
  }
}

export default App;
