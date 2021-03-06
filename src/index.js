import React from 'react';
import ReactDOM from 'react-dom';
import SearchContainer from './widgetComponents/SearchContainer';
import * as serviceWorker from './serviceWorker';

function renderWidget(endpoints) {
  for (const key of Object.keys(endpoints)) {
    ReactDOM.render(<SearchContainer endpoint={key} />, document.getElementById(endpoints[key]));
  }  
}

export default renderWidget;
window.Explorer = {
  renderWidget: renderWidget,
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
