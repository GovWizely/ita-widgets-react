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
      offset: 0,
      activePage: 0,
    };
  }

  baseUrl = "https://api.trade.gov/consolidated_screening_list/search?api_key=ShCzzrAkXLpMTsTlhFhUjD29&q=";
  
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(`${this.baseUrl}${this.state.queryString}&offset=${this.state.offset}`)
    // fetch(`https://api.trade.gov/consolidated_screening_list/search?api_key=ShCzzrAkXLpMTsTlhFhUjD29&q=${this.state.queryString}&offset=${this.state.offset}`)
    // fetch(`https://api.trade.gov/consolidated_screening_list/search?api_key=${process.env.API_KEY}&q=${this.state.queryString}`)
    .then(response => response.json())
    .then(response => this.setState({ 
        results: response.results,
        totalItemsCount: response.total,
        submitted: true,
     }))
    .catch(error => console.log(error));
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
    /* [TODO] This function should also update the activePage and retrigger the handleSubmit */
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
              <Pagination 
                activePage={this.state.activePage}
                totalItemsCount={this.state.totalItemsCount}
                onChange={(pageNumber) => this.handlePageChange(pageNumber)} />
            </div>
            : null }
      </div>
    );
  }
}

export default CSLContainer;