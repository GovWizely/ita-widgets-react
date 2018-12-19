import React from 'react';
import ReactDOM from 'react-dom';
import SearchContainer from './SearchWidget/SearchContainer';
import * as serviceWorker from './serviceWorker';

/* possible endpoints: "consolidated_screening_list", "trade_leads", "trade_events", "export_assistance_centers", "international_office_locations" */

const endpoint="consolidated_screening_list";
// const endpoint="trade_leads";
// const endpoint="trade_events";
// const endpoint="export_assistance_centers";
// const endpoint="international_office_locations";

const API_KEY="ShCzzrAkXLpMTsTlhFhUjD29";

ReactDOM.render(<SearchContainer endpoint={endpoint} API_KEY={API_KEY} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
