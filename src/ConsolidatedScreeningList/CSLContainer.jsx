import React, { Component } from 'react';
import CSLResults from './CSLResults';
require('dotenv').config();

class CSLContainer extends Component {
  constructor() {
    super()
    this.state = { 
      queryString: '',
      results: [],
      totalNumResults: 0,
      submitted: false,
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(`https://api.trade.gov/consolidated_screening_list/search?api_key=ShCzzrAkXLpMTsTlhFhUjD29&q=${this.state.queryString}`)
    // fetch(`https://api.trade.gov/consolidated_screening_list/search?api_key=${process.env.API_KEY}&q=${this.state.queryString}`)
    .then(response => response.json())
    .then(response => this.setState({ 
        results: response.results,
        totalNumResults: response.total,
        submitted: true,
     }))
    .catch(error => console.log(error));
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
        { this.state.submitted ? <CSLResults results={this.state.results} total={this.state.totalNumResults}/> : null }
      </div>
    );
  }
}

export default CSLContainer;