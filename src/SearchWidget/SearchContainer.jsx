import React, { Component } from 'react';
import SearchResults from './SearchResults';
import Pagination from "react-js-pagination";
// import Dropdown from 'react-dropdown';
import Select from 'react-select';
import { IoMdSearch } from 'react-icons/io'
import '../App.css';
import widgetInfo from '../widgetInfo';

class SearchContainer extends Component {
  constructor() {
    super()
    this.state = { 
      queryString: '',
      results: [],
      totalItemsCount: 0,
      submitted: false,
      activePage: 1,
      selected: {},
    };
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect(option) {
    this.setState({selected: option});
    console.log(`You selected ${option.label}, which has code ${option.value}`);
  }
  
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  queryParams() {
    switch (this.props.endpoint) {
      case "consolidated_screening_list":
        return `&name=${this.state.queryString}&fuzzy_name=true`;
      case "trade_leads":
        return `&q=${this.state.queryString}&countries=${this.state.selected.value}`;
      default: return null
    }
  }
  
  fetchResults = () => {
    const targetUrl = `${widgetInfo.baseUrl+widgetInfo[this.props.endpoint].endpoint}?api_key=${this.props.API_KEY}${this.queryParams()}&offset=${(this.state.activePage-1)*10}`;

    console.log(`Fetching from: ${targetUrl}`);    
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

  clearResults = () => {
    this.setState({ 
      queryString: '',
      results: [],
      totalItemsCount: 0,
      submitted: false,
      activePage: 1,
      selected: {},
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>Search {widgetInfo[this.props.endpoint].title}:</p>
          <input 
            type="text"
            name="queryString"
            placeholder="Enter search query"
            value={this.state.queryString}
            onChange={(event) => this.handleChange(event)}
          />
          {(this.props.endpoint === "trade_leads") ? (
            <Select
            options={widgetInfo.countriesList}
            placeholder={this.state.selected.label || "Select country"}
            onChange={this._onSelect}
            value={this.state.selected.value}
            className="Dropdown"
            />
          ) : null }
          <button type="submit"><IoMdSearch /></button>
        </form>
        { this.state.submitted ? 
          <div className="results">
            <SearchResults 
              results={this.state.results} 
              total={this.state.totalItemsCount}
              endpoint={this.props.endpoint}
              />
            <div className="footer">
              <Pagination 
                activePage={this.state.activePage}
                totalItemsCount={this.state.totalItemsCount}
                firstPageText="First"
                prevPageText="<"
                nextPageText=">"
                lastPageText="Last"
                onChange={(pageNumber) => this.handlePageChange(pageNumber)} />
              <button type="reset" id="clearButton" onClick={this.clearResults}>Clear</button>
            </div>
          </div>
        : null }
      </div>
    );
  }
}

export default SearchContainer;