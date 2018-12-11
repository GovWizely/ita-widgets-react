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
    const resultsList = this.props.results.map(item => {
      return (
        <div key={item.id}>
          <p><a href="#" onClick={this.handleClick}> {item.name}</a></p>
          { this.state.toggleDetails ? <p>details component</p> : null}
          {/* [TODO] need to make each item its own component so we can control which details menu is toggled */}
        </div>
      )
    })
    return (
      <div className="resultsList">
        <h3>{this.props.total} results - <a href="http://export.gov/ecr/eg_main_023148.asp">More Information About the Results</a></h3>
        {resultsList}
      </div>
    );
  }
}
export default CSLResults;