import React, { Component } from 'react';
import './App.css';
// import CSLContainer from './ConsolidatedScreeningList/CSLContainer';
// import SearchContainer from './SearchWidget/SearchContainer';
import SearchContainerWithDropDown from './SearchWidget/SearchContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CSLContainer /> */}
        {/* <SearchContainer /> */}
        <SearchContainerWithDropDown endpoint="trade_leads"/>
        {/* possible endpoints: "consolidated_screening_list" or "trade_leads" */}
      </div>
    );
  }
}

export default App;
