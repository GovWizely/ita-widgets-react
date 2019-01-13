import React from 'react';
import ReactDOM from 'react-dom';
import SearchContainer from './widgetComponents/SearchContainer';
import * as serviceWorker from './serviceWorker';


for (const key of Object.keys(window.endpoints)) {
  ReactDOM.render(<SearchContainer endpoint={key} API_KEY={window.API_KEY} />, document.getElementById(window.endpoints[key]));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
