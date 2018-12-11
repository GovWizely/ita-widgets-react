import React, { Component } from 'react';

class CSLResults extends Component {
  constructor() {
    super()
    this.state = {
      toggleDetails: false,
    };
  }

  handleClick = () => {
    this.setState({ toggleDetails: !this.state.toggleDetails })
  }

  render() {
    const moreInfoUrl = "http://export.gov/ecr/eg_main_023148.asp";

    const resultsList = this.props.results.map(item => {
      return (
        <div key={item.id}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <p><a href="#" onClick={this.handleClick}> {item.name}</a></p>
          { this.state.toggleDetails ? <p>details component</p> : null}
          {/* [TODO] need to make each item its own component so we can control which details menu is toggled */}
        </div>
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