import React, { Component } from 'react';
import './App.css';
import SearchContainer from './SearchWidget/SearchContainer';


class App extends Component {
  render() {

    const endpoint="trade_leads" /* possible endpoints: "consolidated_screening_list" or "trade_leads" */

    return (
      <div className="App">
        <SearchContainer endpoint={endpoint} />
      </div>
    );
  }
}

export default App;
