import React, { Component } from 'react';
import './App.css';
import SearchContainer from './SearchWidget/SearchContainer';


class App extends Component {
  render() {

    const endpoint="trade_leads" /* possible endpoints: "consolidated_screening_list" or "trade_leads" */
    // const endpoint="consolidated_screening_list"

    const API_KEY="ShCzzrAkXLpMTsTlhFhUjD29"

    return (
      <div className="App">
        <SearchContainer endpoint={endpoint} API_KEY={API_KEY} />
      </div>
    );
  }
}

export default App;