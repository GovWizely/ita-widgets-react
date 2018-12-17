import React, { Component } from 'react';
import SearchDetails from './SearchDetails';
import { widgetInfo } from '../widgetInfo';

class SearchResults extends Component {

  render() {
    const resultsList = (
      this.props.results.map(item => {
        return (<SearchDetails
          key={item.id}
          name={item.name}
          remarks={item.remarks}
          source={item.source}
          altNames={item.alt_names}
          title={item.title}
          description={item.description}
          url={item.url}
          contact={item.contact}
          endpoint={this.props.endpoint}
          />) 
      })
    )

    return (
      <div className="resultsList">
        <p>{this.props.total} results {(this.props.endpoint === "consolidated_screening_list") ? <a href={widgetInfo.consolidated_screening_list.moreInfo}>More Information About the Results</a> : null}</p>
        {resultsList}
      </div>
    );
  }
}
export default SearchResults;