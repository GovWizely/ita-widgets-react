import React from 'react';
import ReactDOM from 'react-dom';
import SearchContainer from './SearchWidget/SearchContainer';
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<SearchContainer endpoint={window.endpoint} API_KEY={window.API_KEY} />, document.getElementById('widget-container'));
ReactDOM.render(
  <div className="root">
    <h1>ITA Search Widgets</h1>
    <br/><SearchContainer endpoint="consolidated_screening_list" API_KEY={window.API_KEY} /><br/>
    <br/><SearchContainer endpoint="trade_leads" API_KEY={window.API_KEY} /><br/>
    <br/><SearchContainer endpoint="trade_events" API_KEY={window.API_KEY} /><br/>
    <br/><SearchContainer endpoint="export_assistance_centers" API_KEY={window.API_KEY} /><br/>
    <br/><SearchContainer endpoint="international_office_locations" API_KEY={window.API_KEY} /><br/>
  </div>
  , document.getElementById('widget-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
