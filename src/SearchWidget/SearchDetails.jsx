import React, { Component } from 'react';
import '../App.css';

class SearchDetails extends Component {
  constructor(props) {
    super(props)
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
    
    const detailsTable = () => {
      switch (this.props.endpoint) {
        case "consolidated_screening_list":
          return (
            <table>
              <tbody>
                <tr><td>Name</td><td>{this.props.name}</td></tr>
                <tr><td>Remarks</td><td>{this.props.remarks}</td></tr>
                <tr><td>Source</td><td>{this.props.source}</td></tr>
                <tr><td>Alt Names</td><td>{this.props.alt_names}</td></tr>
              </tbody>
            </table>
          );
        case "trade_leads":
          return (
              <table>
                <tbody>
                  <tr><td>Description</td><td>{this.props.description}</td></tr>
                  <tr><td>URL</td><td><a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.url}</a></td></tr>
                  <tr><td>Contact</td><td>{this.props.contact}</td></tr>
                </tbody>
              </table>
            );
        case "trade_events":
          return (
            <table>
              <tbody>
                <tr><td>Event Name</td><td>{this.props.event_name}</td></tr>
                <tr><td>Event Type</td><td>{this.props.event_type}</td></tr>
                <tr><td>Description</td><td>{this.props.description}</td></tr>
                <tr><td>Start Date</td><td>{this.props.start_date}</td></tr>
                <tr><td>End Date</td><td>{this.props.end_date}</td></tr>
                <tr><td>Venues</td><td>{this.props.venues[0].location}</td></tr>
                <tr><td>URL</td><td><a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.url}</a></td></tr>
                <tr><td>Source</td><td>{this.props.source}</td></tr>
              </tbody>
            </table>
          );
        case "export_assistance_centers":
          return (
            <table>
              <tbody>
                <tr><td>Zip Code</td><td>{this.props.zip_code}</td></tr>
                <tr><td>Office Name</td><td>{this.props.office_name}</td></tr>
                {/* <tr><td>Address</td><td>{this.props.address.join('<br>')}</td></tr> */}
                <tr><td>Address</td><td>{this.props.address.map((line, i) => <p key={i}>{line}</p>)}</td></tr>
                <tr><td>Email</td><td>{this.props.email}</td></tr>
                <tr><td>Phone</td><td>{this.props.phone}</td></tr>
              </tbody>
            </table>
          );
        case "international_office_locations":
          return (
            <table>
              <tbody>
                <tr><td>Post</td><td>{this.props.post}</td></tr>
                <tr><td>Address</td><td>{this.props.address.map((line, i) => <p key={i}>{line}</p>)}</td></tr>
                <tr><td>Email</td><td>{this.props.email}</td></tr>
                <tr><td>Phone</td><td>{this.props.phone}</td></tr>
              </tbody>
            </table>
          );
        default: return null;
      }
    };

    return (
      <div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <p><a href="#" title="Expand details table" aria-label="Expand details table" onClick={this.handleClick}>
          {(this.props.endpoint==="export_assistance_centers") ? 
            `${this.props.zip_code} - ${this.props.office_name}` : 
            `${this.props[Object.keys(this.props)[0]]}` 
          }</a></p>
          
          { this.state.toggleDetails ? detailsTable() : null}
      </div>
    );
  }
}

export default SearchDetails;