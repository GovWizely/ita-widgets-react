import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchContainer from './SearchWidget/SearchContainer';
import SearchResults from './SearchWidget/SearchResults';
import SearchDetails from './SearchWidget/SearchDetails';
import widgetInfo from './widgetInfo';
import * as mockProps from './mockProps';

configure ({adapter: new Adapter()});

describe('endpoint="consolidated_screening_list">', () => {
  it('<SearchDetails/> should render a table and heading containing the info when receiving a search result item', () => { // this passes
    let wrapper = shallow(<SearchDetails />).setProps(mockProps.CSLDetails);
    expect(wrapper.find(<table><td>'Smith'</td></table>));
    expect(wrapper.find(<p>'Fakey McNamerson'</p>));
  });

  it('<SearchResults/> should render the <SearchDetails/> component along with the number of results', () => { // this fails, can't traverse results array
    let wrapper = shallow(<SearchResults />).setProps(mockProps.CSLResults);
    expect(wrapper.find(SearchDetails));
    expect(wrapper.find(<p>1 results More Information About the Results</p>));
  });

  it('<SearchContainer/> should render <SearchResults/> component', () => { // this fails, Cannot read property 'title' of undefined (widgetinfo)
    let wrapper = shallow(<SearchContainer />).setProps(mockProps.CSLContainer);
    expect(wrapper.find(<h3>Search The Consolidated Screening List:</h3>));
    expect(wrapper.find(SearchResults));
  });
});

describe('<SearchDetails endpoint="export_assistance_centers"/>', () => {
  it('should render the link & table with address correctly', () => {
    let wrapper = shallow(<SearchDetails />).setProps(mockProps.EACDetails);
    expect(wrapper.find(<p>03857 - ye olde office</p>));
    expect(wrapper.find(<td>Portsmouth, New Hampshire 03801</td>));
  });
})