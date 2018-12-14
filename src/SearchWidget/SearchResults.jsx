import React, { Component } from 'react';
import SearchDetails from './SearchDetails';
import { widgetInfo } from '../widgetInfo';

class SearchResults extends Component {

  render() {
    const CSL = false;

    const resultsList = this.props.results.map(item => {
      return (
        <SearchDetails 
          key={item.id}
          // name={item.name} // for CSL
          // remarks={item.remarks} // for CSL
          // source={item.source} // for CSL
          // altNames={item.alt_names} // for CSL
          title={item.title}
          description={item.description}
          url={item.url}
          contact={item.contact}
        />
      )
    })

    return (
      <div className="resultsList">
        <p>{this.props.total} results {CSL ? <a href={widgetInfo.ConScreenList.moreInfo}>More Information About the Results</a> : null}</p>
        {resultsList}
      </div>
    );
  }
}
export default SearchResults;