import React, { Component } from 'react';
import './App.css';
import SearchContainer from './SearchWidget/SearchContainer';


class App extends Component {
  render() {

    const endpoint="consolidated_screening_list" /* possible endpoints: "consolidated_screening_list" or "trade_leads" */
    const API_KEY="ShCzzrAkXLpMTsTlhFhUjD29"

    return (
      <div className="App">
        <SearchContainer endpoint={endpoint} API_KEY={API_KEY} />
      </div>
    );
  }
}

export default App;