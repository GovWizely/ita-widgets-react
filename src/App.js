import React, { Component } from 'react';
import './App.css';
// import CSLContainer from './ConsolidatedScreeningList/CSLContainer';
import CSLContainer from './ConsolidatedScreeningList/CSLWidget';
// import TradeLeadsContainer from './TradeLeadsWidget/TradeLeadsContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CSLContainer />
        {/* <TradeLeadsContainer /> */}
      </div>
    );
  }
}

export default App;
