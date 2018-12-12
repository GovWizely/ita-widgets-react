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
      activePage: 1,
    };
  }

  baseUrl = "https://api.trade.gov/consolidated_screening_list/search?api_key=ShCzzrAkXLpMTsTlhFhUjD29";
  
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  fetchResults = () => {
    console.log(`fetching with offset = ${this.state.activePage-1}`)
    fetch(`${this.baseUrl}&q=${this.state.queryString}&offset=${this.state.activePage-1}`)
    .then(response => response.json())
    .then(response => this.setState({ 
        results: response.results,
        totalItemsCount: response.total,
        submitted: true,
     }))
    .catch(error => console.log(error))
    .then(console.log(`active page is ${this.state.activePage}`))
  }

  handleSubmit = event => {
    event.preventDefault();
    this.fetchResults();
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.fetchResults();
  }

  clearSubmitted = () => {
    this.setState({ submitted: false });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>Search the Consolidated Screening List:</p>
          <input 
            type="text"
            name="queryString"
            placeholder="Enter search query"
            value={this.state.queryString}
            onChange={(event) => this.handleChange(event)}
          />
          <button type="submit">Search</button>
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
                prevPageText="<"
                nextPageText=">"
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