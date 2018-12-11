import React, { Component } from 'react';
import CSLDetails from './CSLDetails';

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
        <h3>{this.props.total} results - <a href={moreInfoUrl}>More Information About the Results</a></h3>
        {resultsList}
      </div>
    );
  }
}
export default CSLResults;