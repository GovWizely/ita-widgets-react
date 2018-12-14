import React, { Component } from 'react';
import '../App.css';

class SearchDetails extends Component {
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

    // const CSLTable = (
    //   <table>
    //     <tbody>
    //       <tr><td>Name</td><td>{this.props.name}</td></tr>
    //       <tr><td>Remarks</td><td>{this.props.remarks}</td></tr>
    //       <tr><td>Source</td><td>{this.props.source}</td></tr>
    //       <tr><td>Alt Names</td><td>{this.props.altNames}</td></tr>
    //     </tbody>
    //   </table>
    // );

    const TradeLeadsTable = (
      <table>
        <tbody>
          <tr><td>Description</td><td>{this.props.description}</td></tr>
          <tr><td>URL</td><td>{this.props.url}</td></tr>
          <tr><td>Contact</td><td>{this.props.contact}</td></tr>
        </tbody>
      </table>
    );
    
    return (
      <div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <p><a href="#" title="Expand details table" aria-label="Expand details table" onClick={this.handleClick}> {this.props.title}</a></p> {/* TODO: this.props.name or this.props.title */}
          { this.state.toggleDetails ? TradeLeadsTable : null}
      </div>
    );
  }
}

export default SearchDetails;