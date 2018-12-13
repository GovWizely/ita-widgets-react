import React, { Component } from 'react';
import SearchDetails from './SearchDetails';

class SearchResults extends Component {

  render() {
    const moreInfoUrl = "http://export.gov/ecr/eg_main_023148.asp";

    const resultsList = this.props.results.map(item => {
      return (
        <SearchDetails 
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
export default SearchResults;