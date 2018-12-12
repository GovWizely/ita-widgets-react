/* This file contains all the component together in one place */

import React, { Component } from 'react';
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
    fetch(`${this.baseUrl}&q=${this.state.queryString}&offset=${this.state.activePage-1}`)
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

class CSLResults extends Component {

  render() {
    const moreInfoUrl = "http://export.gov/ecr/eg_main_023148.asp";

    const resultsList = this.props.results.map(item => {
      return (
        <CSLDetails 
          key={item.id}
          onClick={this.handleClick}
          name={item.name}
          remarks={item.remarks}
          source={item.source}
          altNames={item.alt_names}
        />
      )
    })

    return (
      <div className="resultsList">
        <p>{this.props.total} results - <a href={moreInfoUrl}>More Information About the Results</a></p>
        {resultsList}
      </div>
    );
  }
}

class CSLDetails extends Component {
  constructor() {
    super()
    this.state = {
      toggleDetails: false,
    };
  }

  handleClick = () => {
    this.setState({ 
      toggleDetails: !this.state.toggleDetails 
    });
  }

  render() {
    return (
      <div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <p><a href="#" onClick={this.handleClick}> {this.props.name}</a></p>
          { this.state.toggleDetails ? 
            <table>
              <tbody>
                <tr><td>Name</td><td>{this.props.name}</td></tr>
                <tr><td>Remarks</td><td>{this.props.remarks}</td></tr>
                <tr><td>Source</td><td>{this.props.source}</td></tr>
                <tr><td>Alt Names</td><td>{this.props.altNames}</td></tr>
              </tbody>
            </table> : null}
      </div>
    );
  }
}
