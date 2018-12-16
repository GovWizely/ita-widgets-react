import React, { Component } from 'react';
import './App.css';
import CSLContainer from './ConsolidatedScreeningList/CSLContainer';
// import SearchContainer from './SearchWidget/SearchContainer';
// import SearchContainerWithDropDown from './SearchWidget/SearchContainerWithDropdown';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CSLContainer />
        {/* <SearchContainer /> */}
        {/* <SearchContainerWithDropDown /> */}
      </div>
    );
  }
}

export default App;
