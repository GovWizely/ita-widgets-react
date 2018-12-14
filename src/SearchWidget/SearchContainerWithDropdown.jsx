import React, { Component } from 'react';
import SearchResults from './SearchResults';
import Pagination from "react-js-pagination";
import Dropdown from 'react-dropdown';
import '../App.css';
import { widgetInfo } from '../widgetInfo';

class SearchContainerWithDropDown extends Component {
  constructor() {
    super()
    this.state = { 
      queryString: '',
      results: [],
      totalItemsCount: 0,
      submitted: false,
      activePage: 1,
      selected: '',
    };
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect(option) {
    this.setState({selected: option.value});
    console.log(`You selected ${option.label}, which has code ${option.value}`);
  }
  
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  fetchResults = () => {
    const targetUrl = `${widgetInfo.baseUrl+widgetInfo.TradeLeads.endpoint}?api_key=${widgetInfo.API_KEY}&q=${this.state.queryString}&countries=${this.state.selected}&offset=${this.state.activePage-1}`;

    console.log(targetUrl);    
    fetch(targetUrl)
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
          <p>Search {widgetInfo.TradeLeads.title}:</p>
          <input 
            type="text"
            name="queryString"
            placeholder="Enter search query"
            value={this.state.queryString}
            onChange={(event) => this.handleChange(event)}
          />
          <Dropdown 
            options={widgetInfo.countriesList}
            placeholder={this.state.selected || "Select country"}
            onChange={this._onSelect}
            value={this.state.selected.value}
            className="dropdown"
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

export default SearchContainerWithDropDown;