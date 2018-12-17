import React, { Component } from 'react';
import './App.css';
import SearchContainer from './SearchWidget/SearchContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchContainer endpoint="trade_leads"/>
        {/* possible endpoints: "consolidated_screening_list" or "trade_leads" */}
      </div>
    );
  }
}

export default App;
