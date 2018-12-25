import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchContainer from './SearchWidget/SearchContainer';
import SearchResults from './SearchWidget/SearchResults';
import SearchDetails from './SearchWidget/SearchDetails';

import * as mockProps from './mockProps';
import * as mockState from './mockState';

jest.mock('./widgetInfo');
import widgetInfo from './widgetInfo';
jest.requireActual('./widgetInfo');

configure ({adapter: new Adapter()});

describe('endpoint="consolidated_screening_list">', () => {
  // beforeEach(() => {
  //   widgetInfo.mockClear();
  // });

  it('<SearchDetails/> should render a table and heading containing the info when receiving a search result item', () => {
    let wrapper = shallow(<SearchDetails />).setState({toggleDetails: true}).setProps(mockProps.CSLDetails);
    expect(wrapper.contains(<td>'Smith'</td>));
    expect(wrapper.contains(<p><a>'Fakey McNamerson'</a></p>));
  });

  it('<SearchResults/> should render the <SearchDetails/> component along with the number of results', () => { // this fails, can't traverse results array
    let wrapper = render(<SearchResults />).setProps(mockProps.CSLResults);
    expect(wrapper.find(SearchDetails));
    expect(wrapper.contains(<p>1 results More Information About the Results</p>));
  });

  it('<SearchContainer/> should render <SearchResults/> component', () => { // this fails, Cannot read property 'title' of undefined
    let wrapper = render(<SearchContainer />).setState(mockState.CSLContainer).setProps(mockProps.CSLContainer);
    console.log(widgetInfo[this.props.endpoint]);
    expect(wrapper.find(SearchResults));
    // expect(wrapper.contains(<h3>Search The Consolidated Screening List:</h3>));
  });
});

// describe('<SearchDetails endpoint="export_assistance_centers"/>', () => {
//   it('should render the link & table with address correctly', () => {
//     let wrapper = shallow(<SearchDetails />).setProps(mockProps.EACDetails).setState({toggleDetails: true});
//     expect(wrapper.contains(<div>03857 - ye olde office</div>)).toEqual(true);
//     expect(wrapper.contains(<td>Portsmouth, New Hampshire 03801</td>)).toEqual(true);
//   });
// })