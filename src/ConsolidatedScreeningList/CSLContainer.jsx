import React, { Component } from 'react';
import CSLResults from './CSLResults';
import Pagination from "react-js-pagination";
import '../App.css';
require('dotenv').config();

class CSLContainer extends Component {
  constructor() {
    super()
    this.state = { 
      queryString: '',
      results: [],
      totalItemsCount: 0,
      submitted: false,
      activePage: 0,
    };
  }

  baseUrl = "https://api.trade.gov/consolidated_screening_list/search?api_key=ShCzzrAkXLpMTsTlhFhUjD29";
  
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  fetchResults = () => {
    fetch(`${this.baseUrl}&q=${this.state.queryString}&offset=${this.state.activePage}`)
    .then(response => response.json())
    .then(response => this.setState({ 
        results: response.results,
        totalItemsCount: response.total,
        submitted: true,
     }))
    .catch(error => console.log(error));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.fetchResults();
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
    this.fetchResults();
  }

  clearSubmitted = () => {
    this.setState({ submitted: false });
  }

  render() {
    return (
      <div>
        <h2>Search the Consolidated Screening List:</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input 
            type="text"
            name="queryString"
            placeholder="Enter search query"
            value={this.state.queryString}
            onChange={(event) => this.handleChange(event)}
          />
          <input type="submit" />
        </form>
          { this.state.submitted ? 
            <div className="results">
              <CSLResults 
                results={this.state.results} 
                total={this.state.totalItemsCount}/>
              <div className="footer">
                <Pagination 
                  activePage={this.state.activePage}
                  totalItemsCount={this.state.totalItemsCount}
                  firstPageText="First"
                  lastPageText="Last"
                  onChange={(pageNumber) => this.handlePageChange(pageNumber)} />
                <button id="clearButton" onClick={this.clearSubmitted}>Clear</button>
              </div>
            </div>
            : null }
      </div>
    );
  }
}

export default CSLContainer;