import React, { Component } from 'react';
import SearchResults from './SearchResults';
import Pagination from "react-js-pagination";
import '../App.css';
import {widgetInfo} from '../widgetInfo';
require('dotenv').config();

class SearchContainer extends Component {
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
  
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  fetchResults = () => {
    fetch(`${widgetInfo.baseUrl}${widgetInfo.ConScreenList.endpoint}?api_key=${widgetInfo.API_KEY}&q=${this.state.queryString}&offset=${this.state.activePage-1}`)
    .then(console.log(`fetching at ${widgetInfo.baseUrl}${widgetInfo.ConScreenList.endpoint}?api_key=${widgetInfo.API_KEY}&q=${this.state.queryString}&offset=${this.state.activePage-1}`))
    .then(response => response.json())
    .then(response => this.setState({ 
        results: response.results,
        totalItemsCount: response.total,
        submitted: true,
     }))
    .catch(error => console.log(error))
  }

  handleSubmit = event => {
    event.preventDefault();
    this.fetchResults();
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber }, () => this.fetchResults());
  }

  clearSubmitted = () => {
    this.setState({ submitted: false });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>Search the {widgetInfo.ConScreenList.title}:</p>
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
            <SearchResults 
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

export default SearchContainer;