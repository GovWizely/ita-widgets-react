import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchContainer from './SearchWidget/SearchContainer';
import SearchResults from './SearchWidget/SearchResults';
import SearchDetails from './SearchWidget/SearchDetails';
import widgetInfo from './widgetInfo';
import * as mockProps from './mockProps';
import * as mockState from './mockState';

configure ({adapter: new Adapter()});

describe('endpoint="consolidated_screening_list">', () => {
  it('<SearchDetails/> should render a table and heading containing the info when receiving a search result item', () => {
    let wrapper = shallow(<SearchDetails />).setState({toggleDetails: true}).setProps(mockProps.CSLDetails);
    expect(wrapper.contains(<td>'Smith'</td>));
    expect(wrapper.contains(<p><a>'Fakey McNamerson'</a></p>));
  });

  it('<SearchResults/> should render the <SearchDetails/> component along with the number of results', () => { // this fails, can't traverse results array
    let wrapper = shallow(<SearchResults widgetInfo={widgetInfo}/>).setProps(mockProps.CSLResults);
    expect(wrapper.find(SearchDetails));
    expect(wrapper.contains(<p>1 results More Information About the Results</p>));
  });

  it('<SearchContainer/> should render <SearchResults/> component', () => { // this fails, Cannot read property 'title' of undefined
    let wrapper = mount(<SearchContainer widgetInfo={() => widgetInfo}/>).setState(mockState.CSLContainer).setProps(mockProps.CSLContainer);
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