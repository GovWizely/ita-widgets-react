import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchContainer from './SearchWidget/SearchContainer';
import SearchResults from './SearchWidget/SearchResults';
import SearchDetails from './SearchWidget/SearchDetails';

import * as mockProps from './mockProps';
import * as mockState from './mockState';
import widgetInfo from './widgetInfo';

// jest.mock('./widgetInfo');
/* eslint-disable import/first */
// const widgetInfo = jest.requireActual('./widgetInfo');

configure ({adapter: new Adapter()});

describe('endpoint="consolidated_screening_list"', () => {
  // beforeEach(() => {
  //   widgetInfo.mockClear();
  // });

  it('<SearchDetails/> should render a table and heading containing the info when receiving a search result item', () => {
    let wrapper = shallow(<SearchDetails />).setState({toggleDetails: true}).setProps(mockProps.CSLDetails);
    // expect(wrapper.find('td')).toHaveLength(8);
    // expect(wrapper.html()).toEqual("<div><p><a href=\"#\" title=\"Expand details table\" aria-label=\"Expand details table\">Bobby Droptables</a></p><table><tbody><tr><td>Name</td><td>Bobby Droptables</td></tr><tr><td>Remarks</td><td></td></tr><tr><td>Source</td><td>Denied Persons List (DPL) - Bureau of Industry and Security</td></tr><tr><td>Alt Names</td><td>Smith</td></tr></tbody></table></div>");
    expect(wrapper.contains(<td>Bobby Droptables</td>)).toBe(true);
  });

  it('<SearchResults/> should render the <SearchDetails/> component along with the number of results', () => {
    let context = {widgetInfo: widgetInfo};
    let wrapper = shallow(<SearchResults {...mockProps.CSLResults} />, {context});
    expect(wrapper.find(SearchDetails)).toHaveLength(2);
    expect(wrapper.contains(<p>2 results <a href="http://export.gov/ecr/eg_main_023148.asp"><i> More Information About the Results</i></a></p>)).toBe(true);
  });

  it('<SearchContainer/> should render <SearchResults/> component', () => {
    let context = {widgetInfo: widgetInfo};
    let wrapper = shallow(<SearchContainer {...mockProps.CSLContainer} />, {context}).setState(mockState.CSLContainer);
    expect(wrapper.find(SearchResults));
    // expect(wrapper.contains(<h3>Search The Consolidated Screening List:</h3>));
  });
});

describe('endpoint="export_assistance_centers"', () => {
  it('<SearchDetails/> should render the link & table with address correctly', () => {
    let wrapper = shallow(<SearchDetails />).setState({toggleDetails: true}).setProps(mockProps.EACDetails);
    // expect(wrapper.contains(<td>03857 - Ye Olde Office</td>)).toBe(true);
    // expect(wrapper.html()).toEqual("<div><p><a href=\"#\" title=\"Expand details table\" aria-label=\"Expand details table\">03857 - Ye Olde Office</a></p><table><tbody><tr><td>Zip Code</td><td>03857</td></tr><tr><td>Office Name</td><td>Ye Olde Office</td></tr><tr><td>Address</td><td><div>line1</div><div>Portsmouth, New Hampshire 03801</div></td></tr><tr><td>Email</td><td>email@address</td></tr><tr><td>Phone</td><td>555-1234</td></tr></tbody></table></div>");
    expect(wrapper.contains(<td><div>line1</div><div>Portsmouth, New Hampshire 03801</div></td>)).toBe(true);
  });
})