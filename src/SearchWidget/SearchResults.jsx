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
            alt_names={item.alt_names}
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
        case "trade_events":
          return (<SearchDetails 
            key={item.id}
            event_name={item.event_name}
            event_type={item.event_type}
            description={item.description}
            start_date={item.start_date}
            end_date={item.end_date}
            venues={item.venues} // [TODO] check that this works with multiples
            url={item.url}
            source={item.source}
            endpoint={this.props.endpoint}
            />)
        case "export_assistance_centers":
          return (<SearchDetails 
            key={item.id}
            zip_code={item.zip_code}
            officeName={item.office_name}
            address={item.address}
            email={item.email}
            phone={item.phone}
            endpoint={this.props.endpoint}
            />)
        case "international_office_locations":
          return (<SearchDetails 
            key={item.id}
            post={item.post}
            address={item.address}
            email={item.email}
            phone={item.phone}
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