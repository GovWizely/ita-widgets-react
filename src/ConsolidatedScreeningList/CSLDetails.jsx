import React, { Component } from 'react';
import '../App.css';

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

export default CSLDetails;