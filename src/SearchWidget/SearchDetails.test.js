import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchDetails from './SearchDetails';

configure ({adapter: new Adapter()});

describe('<SearchDetails endpoint="consolidated_screening_list"/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchDetails />);
    wrapper.setProps({
      key: 1,
      name: 'Fakey McNamerson',
      item: {
        name: 'Fakey McNamerson',
        remarks: '',
        source: 'Denied Persons List (DPL) - Bureau of Industry and Security',
        alt_names: "Smith",
      },
      endpoint: 'consolidated_screening_list',
      });
  });
  it('should render a table containing the info when receiving a search result item', () => {
    expect(wrapper.find(<table><td>'Smith'</td></table>));
  });
  it('should use the name as the header above the table of details', () => {
    expect(wrapper.find(<p>'Fakey McNamerson'</p>))
  });
})

describe('<SearchDetails endpoint="export_assistance_centers"/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchDetails />);
    wrapper.setProps({
      key: 1,
      item: {
        zip_code: "03857",
        office_name: "ye olde office",
        address: ["Two International Drive, Suite 121",
        "Portsmouth, New Hampshire 03801",
        "http://www.export.gov/newhampshire"],
        email: "Office.Portsmouth@trade.gov",
        phone: "603-610-2416",
      },
      endpoint: "export_assistance_centers",
    });
  });
  it('should render the link correctly', () => {
    expect(wrapper.find(<p>03857 - ye olde office</p>));
  });
  it('should render a table that contains the address', () => {
    expect(wrapper.find(<td>Portsmouth, New Hampshire 03801</td>));
  });
})