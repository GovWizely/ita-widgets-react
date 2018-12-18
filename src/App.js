import React, { Component } from 'react';
import './App.css';
import SearchContainer from './SearchWidget/SearchContainer';


class App extends Component {
  render() {

    /* possible endpoints: "consolidated_screening_list", "trade_leads", "trade_events", "export_assistance centers", "international_office_locations" */
    
    // const endpoint="consolidated_screening_list"
    // const endpoint="trade_leads"
    // const endpoint="trade_events"
    const endpoint="export_assistance_centers"
    // const endpoint="international_office_locations"

    const API_KEY="ShCzzrAkXLpMTsTlhFhUjD29"

    return (
      <div className="App">
        <SearchContainer endpoint={endpoint} API_KEY={API_KEY} />
      </div>
    );
  }
}

export default App;