import React from 'react';
import ReactDOM from 'react-dom';
import SearchContainer from './widgetComponents/SearchContainer';
import * as serviceWorker from './serviceWorker';


window.endpoints.forEach(endpoint => {
  return ReactDOM.render(<SearchContainer endpoint={endpoint} API_KEY={window.API_KEY} />, document.getElementById(endpoint));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
