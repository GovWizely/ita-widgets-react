export const CSLContainer = {
  endpoint: "consolidated_screening_list",
  API_KEY: 5,
};
export const CSLResults = {
  total: 2, 
  results: [
    {
      id: 1,
      name: 'Bobby Droptables',
      remarks: '',
      source: 'Denied Persons List (DPL) - Bureau of Industry and Security',
      alt_names: [],
    },
    {
      id: 2,
      name: 'the second name',
      remarks: '',
      source: 'ITAR Debarred (DTC) - State Department',
      alt_name: 'Berty Tyloo',
    },
  ],
  endpoint: "consolidated_screening_list", 
};
export const CSLDetails = {
  key: 1,
  name: 'Bobby Droptables',
  item: {
    id: 1,
    name: 'Bobby Droptables',
    remarks: '',
    source: 'Denied Persons List (DPL) - Bureau of Industry and Security',
    alt_names: "Smith",
  },
  endpoint: "consolidated_screening_list",  
};

export const EACDetails = {
  key: 1,
  item: {
    post: "post",
    zip_code: "03857",
    office_name: "Ye Olde Office",
    email: "email@address",
    phone: "555-1234",
    address: ["line1", "Portsmouth, New Hampshire 03801"],
  },
  endpoint: "export_assistance_centers",
};