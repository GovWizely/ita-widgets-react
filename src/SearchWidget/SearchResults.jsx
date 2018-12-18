import React, { Component } from 'react';
import SearchDetails from './SearchDetails';
import { widgetInfo } from '../widgetInfo';

class SearchResults extends Component {

  render() {
    const resultsList = this.props.results.map(item => {
      switch (this.props.endpoint) {
        case "consolidated_screening_list":
          return (<SearchDetails
            key={item.id}
            name={item.name} // this needs to be first in the list after the key prop
            remarks={item.remarks}
            source={item.source}
            altNames={item.alt_names}
            endpoint={this.props.endpoint}
            />)
        case "trade_leads":
          return (<SearchDetails
            key={item.id}
            title={item.title} // this needs to be first in the list after the key prop
            description={item.description}
            url={item.url}
            contact={item.contact}
            endpoint={this.props.endpoint}
            />)
        default: return null
      }
    })

    return (
      <div className="resultsList">
        <p>{this.props.total} results {(this.props.endpoint === "consolidated_screening_list") ? <a href={widgetInfo.consolidated_screening_list.moreInfo}>More Information About the Results</a> : null}</p>
        {resultsList}
      </div>
    );
  }
}
export default SearchResults;