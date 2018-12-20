(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,l){},27:function(e,a,l){e.exports=l(46)},46:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),r=l(3),u=l.n(r),i=l(19),s=l(4),o=l(5),c=l(7),b=l(6),v=l(8),d=l(9),m=(l(13),function(e){function a(e){var l;return Object(s.a)(this,a),(l=Object(c.a)(this,Object(b.a)(a).call(this,e))).handleClick=function(){l.setState({toggleDetails:!l.state.toggleDetails})},l.state={toggleDetails:!1},l}return Object(v.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("p",null,n.a.createElement("a",{href:"#",title:"Expand details table","aria-label":"Expand details table",onClick:this.handleClick},"export_assistance_centers"===this.props.endpoint?"".concat(this.props.item.zip_code," - ").concat(this.props.item.office_name):"".concat(this.props[Object.keys(this.props)[0]]))),this.state.toggleDetails?function(){switch(e.props.endpoint){case"consolidated_screening_list":return n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Name"),n.a.createElement("td",null,e.props.item.name)),n.a.createElement("tr",null,n.a.createElement("td",null,"Remarks"),n.a.createElement("td",null,e.props.item.remarks)),n.a.createElement("tr",null,n.a.createElement("td",null,"Source"),n.a.createElement("td",null,e.props.item.source)),n.a.createElement("tr",null,n.a.createElement("td",null,"Alt Names"),n.a.createElement("td",null,e.props.item.alt_names))));case"trade_leads":return n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Description"),n.a.createElement("td",null,e.props.item.description)),n.a.createElement("tr",null,n.a.createElement("td",null,"URL"),n.a.createElement("td",null,n.a.createElement("a",{href:e.props.item.url,target:"_blank",rel:"noopener noreferrer"},e.props.item.url))),n.a.createElement("tr",null,n.a.createElement("td",null,"Contact"),n.a.createElement("td",null,e.props.item.contact))));case"trade_events":return n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Event Name"),n.a.createElement("td",null,e.props.item.event_name)),n.a.createElement("tr",null,n.a.createElement("td",null,"Event Type"),n.a.createElement("td",null,e.props.item.event_type)),n.a.createElement("tr",null,n.a.createElement("td",null,"Description"),n.a.createElement("td",null,e.props.item.description)),n.a.createElement("tr",null,n.a.createElement("td",null,"Start Date"),n.a.createElement("td",null,e.props.item.start_date)),n.a.createElement("tr",null,n.a.createElement("td",null,"End Date"),n.a.createElement("td",null,e.props.item.end_date)),n.a.createElement("tr",null,n.a.createElement("td",null,"Venues"),n.a.createElement("td",null,e.props.item.venues[0].location)),n.a.createElement("tr",null,n.a.createElement("td",null,"URL"),n.a.createElement("td",null,n.a.createElement("a",{href:e.props.item.url,target:"_blank",rel:"noopener noreferrer"},e.props.item.url))),n.a.createElement("tr",null,n.a.createElement("td",null,"Source"),n.a.createElement("td",null,e.props.item.source))));case"export_assistance_centers":return n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Zip Code"),n.a.createElement("td",null,e.props.item.zip_code)),n.a.createElement("tr",null,n.a.createElement("td",null,"Office Name"),n.a.createElement("td",null,e.props.item.office_name)),n.a.createElement("tr",null,n.a.createElement("td",null,"Address"),n.a.createElement("td",null,e.props.item.address.map(function(e,a){return n.a.createElement("div",{key:a},e)}))),n.a.createElement("tr",null,n.a.createElement("td",null,"Email"),n.a.createElement("td",null,e.props.item.email)),n.a.createElement("tr",null,n.a.createElement("td",null,"Phone"),n.a.createElement("td",null,e.props.item.phone))));case"international_office_locations":return n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Post"),n.a.createElement("td",null,e.props.item.post)),n.a.createElement("tr",null,n.a.createElement("td",null,"Address"),n.a.createElement("td",null,e.props.item.address.map(function(e,a){return n.a.createElement("div",{key:a},e)}))),n.a.createElement("tr",null,n.a.createElement("td",null,"Email"),n.a.createElement("td",null,e.props.item.email)),n.a.createElement("tr",null,n.a.createElement("td",null,"Phone"),n.a.createElement("td",null,e.props.item.phone))));default:return null}}():null)}}]),a}(t.Component)),p={baseUrl:"https://api.trade.gov",consolidated_screening_list:{title:"the Consolidated Screening List",endpoint:"/consolidated_screening_list/search",moreInfo:"http://export.gov/ecr/eg_main_023148.asp"},trade_leads:{title:"Trade Leads",endpoint:"/v1/trade_leads/search"},trade_events:{title:"Trade Events",endpoint:"/v1/trade_events/search"},export_assistance_centers:{title:"Export Assistance Centers",endpoint:"/ita_zipcode_to_post/search",placeholder:"Enter ZIP code"},international_office_locations:{title:"International Office Locations",endpoint:"/ita_office_locations/search",placeholder:"Enter city name"},countriesList:[{value:"",label:"Select a Country"},{value:"AF",label:"Afghanistan"},{value:"AX",label:"Aland Islands"},{value:"AL",label:"Albania"},{value:"DZ",label:"Algeria"},{value:"AS",label:"American Samoa"},{value:"AD",label:"Andorra"},{value:"AO",label:"Angola"},{value:"AI",label:"Anguilla"},{value:"AQ",label:"Antarctica"},{value:"AG",label:"Antigua And Barbuda"},{value:"AR",label:"Argentina"},{value:"AM",label:"Armenia"},{value:"AW",label:"Aruba"},{value:"AU",label:"Australia"},{value:"AT",label:"Austria"},{value:"AZ",label:"Azerbaijan"},{value:"BS",label:"Bahamas"},{value:"BH",label:"Bahrain"},{value:"BD",label:"Bangladesh"},{value:"BB",label:"Barbados"},{value:"BY",label:"Belarus"},{value:"BE",label:"Belgium"},{value:"BZ",label:"Belize"},{value:"BJ",label:"Benin"},{value:"BM",label:"Bermuda"},{value:"BT",label:"Bhutan"},{value:"BO",label:"Bolivia"},{value:"BA",label:"Bosnia And Herzegovina"},{value:"BW",label:"Botswana"},{value:"BV",label:"Bouvet Island"},{value:"BR",label:"Brazil"},{value:"IO",label:"British Indian Ocean Territory"},{value:"BN",label:"Brunei Darussalam"},{value:"BG",label:"Bulgaria"},{value:"BF",label:"Burkina Faso"},{value:"BI",label:"Burundi"},{value:"KH",label:"Cambodia"},{value:"CM",label:"Cameroon"},{value:"CA",label:"Canada"},{value:"CV",label:"Cape Verde"},{value:"KY",label:"Cayman Islands"},{value:"CF",label:"Central African Republic"},{value:"TD",label:"Chad"},{value:"CL",label:"Chile"},{value:"CN",label:"China"},{value:"CX",label:"Christmas Island"},{value:"CC",label:"Cocos (Keeling) Islands"},{value:"CO",label:"Colombia"},{value:"KM",label:"Comoros"},{value:"CG",label:"Congo"},{value:"CD",label:"Congo, Democratic Republic"},{value:"CK",label:"Cook Islands"},{value:"CR",label:"Costa Rica"},{value:"CI",label:"Cote D'Ivoire"},{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"},{value:"DJ",label:"Djibouti"},{value:"DM",label:"Dominica"},{value:"DO",label:"Dominican Republic"},{value:"EC",label:"Ecuador"},{value:"EG",label:"Egypt"},{value:"SV",label:"El Salvador"},{value:"GQ",label:"Equatorial Guinea"},{value:"ER",label:"Eritrea"},{value:"EE",label:"Estonia"},{value:"ET",label:"Ethiopia"},{value:"FK",label:"Falkland Islands (Malvinas)"},{value:"FO",label:"Faroe Islands"},{value:"FJ",label:"Fiji"},{value:"FI",label:"Finland"},{value:"FR",label:"France"},{value:"GF",label:"French Guiana"},{value:"PF",label:"French Polynesia"},{value:"TF",label:"French Southern Territories"},{value:"GA",label:"Gabon"},{value:"GM",label:"Gambia"},{value:"GE",label:"Georgia"},{value:"DE",label:"Germany"},{value:"GH",label:"Ghana"},{value:"GI",label:"Gibraltar"},{value:"GR",label:"Greece"},{value:"GL",label:"Greenland"},{value:"GD",label:"Grenada"},{value:"GP",label:"Guadeloupe"},{value:"GU",label:"Guam"},{value:"GT",label:"Guatemala"},{value:"GG",label:"Guernsey"},{value:"GN",label:"Guinea"},{value:"GW",label:"Guinea-Bissau"},{value:"GY",label:"Guyana"},{value:"HT",label:"Haiti"},{value:"HM",label:"Heard Island & Mcdonald Islands"},{value:"VA",label:"Holy See (Vatican City State)"},{value:"HN",label:"Honduras"},{value:"HK",label:"Hong Kong"},{value:"HU",label:"Hungary"},{value:"IS",label:"Iceland"},{value:"IN",label:"India"},{value:"ID",label:"Indonesia"},{value:"IR",label:"Iran, Islamic Republic Of"},{value:"IQ",label:"Iraq"},{value:"IE",label:"Ireland"},{value:"IM",label:"Isle Of Man"},{value:"IL",label:"Israel"},{value:"IT",label:"Italy"},{value:"JM",label:"Jamaica"},{value:"JP",label:"Japan"},{value:"JE",label:"Jersey"},{value:"JO",label:"Jordan"},{value:"KZ",label:"Kazakhstan"},{value:"KE",label:"Kenya"},{value:"KI",label:"Kiribati"},{value:"KR",label:"Korea"},{value:"KW",label:"Kuwait"},{value:"KG",label:"Kyrgyzstan"},{value:"LA",label:"Lao People's Democratic Republic"},{value:"LV",label:"Latvia"},{value:"LB",label:"Lebanon"},{value:"LS",label:"Lesotho"},{value:"LR",label:"Liberia"},{value:"LY",label:"Libyan Arab Jamahiriya"},{value:"LI",label:"Liechtenstein"},{value:"LT",label:"Lithuania"},{value:"LU",label:"Luxembourg"},{value:"MO",label:"Macao"},{value:"MK",label:"Macedonia"},{value:"MG",label:"Madagascar"},{value:"MW",label:"Malawi"},{value:"MY",label:"Malaysia"},{value:"MV",label:"Maldives"},{value:"ML",label:"Mali"},{value:"MT",label:"Malta"},{value:"MH",label:"Marshall Islands"},{value:"MQ",label:"Martinique"},{value:"MR",label:"Mauritania"},{value:"MU",label:"Mauritius"},{value:"YT",label:"Mayotte"},{value:"MX",label:"Mexico"},{value:"FM",label:"Micronesia, Federated States Of"},{value:"MD",label:"Moldova"},{value:"MC",label:"Monaco"},{value:"MN",label:"Mongolia"},{value:"ME",label:"Montenegro"},{value:"MS",label:"Montserrat"},{value:"MA",label:"Morocco"},{value:"MZ",label:"Mozambique"},{value:"MM",label:"Myanmar"},{value:"NA",label:"Namibia"},{value:"NR",label:"Nauru"},{value:"NP",label:"Nepal"},{value:"NL",label:"Netherlands"},{value:"AN",label:"Netherlands Antilles"},{value:"NC",label:"New Caledonia"},{value:"NZ",label:"New Zealand"},{value:"NI",label:"Nicaragua"},{value:"NE",label:"Niger"},{value:"NG",label:"Nigeria"},{value:"NU",label:"Niue"},{value:"NF",label:"Norfolk Island"},{value:"MP",label:"Northern Mariana Islands"},{value:"NO",label:"Norway"},{value:"OM",label:"Oman"},{value:"PK",label:"Pakistan"},{value:"PW",label:"Palau"},{value:"PS",label:"Palestinian Territory, Occupied"},{value:"PA",label:"Panama"},{value:"PG",label:"Papua New Guinea"},{value:"PY",label:"Paraguay"},{value:"PE",label:"Peru"},{value:"PH",label:"Philippines"},{value:"PN",label:"Pitcairn"},{value:"PL",label:"Poland"},{value:"PT",label:"Portugal"},{value:"PR",label:"Puerto Rico"},{value:"QA",label:"Qatar"},{value:"RE",label:"Reunion"},{value:"RO",label:"Romania"},{value:"RU",label:"Russian Federation"},{value:"RW",label:"Rwanda"},{value:"BL",label:"Saint Barthelemy"},{value:"SH",label:"Saint Helena"},{value:"KN",label:"Saint Kitts And Nevis"},{value:"LC",label:"Saint Lucia"},{value:"MF",label:"Saint Martin"},{value:"PM",label:"Saint Pierre And Miquelon"},{value:"VC",label:"Saint Vincent And Grenadines"},{value:"WS",label:"Samoa"},{value:"SM",label:"San Marino"},{value:"ST",label:"Sao Tome And Principe"},{value:"SA",label:"Saudi Arabia"},{value:"SN",label:"Senegal"},{value:"RS",label:"Serbia"},{value:"SC",label:"Seychelles"},{value:"SL",label:"Sierra Leone"},{value:"SG",label:"Singapore"},{value:"SK",label:"Slovakia"},{value:"SI",label:"Slovenia"},{value:"SB",label:"Solomon Islands"},{value:"SO",label:"Somalia"},{value:"ZA",label:"South Africa"},{value:"GS",label:"South Georgia And Sandwich Isl."},{value:"ES",label:"Spain"},{value:"LK",label:"Sri Lanka"},{value:"SD",label:"Sudan"},{value:"SR",label:"Suriname"},{value:"SJ",label:"Svalbard And Jan Mayen"},{value:"SZ",label:"Swaziland"},{value:"SE",label:"Sweden"},{value:"CH",label:"Switzerland"},{value:"SY",label:"Syrian Arab Republic"},{value:"TW",label:"Taiwan"},{value:"TJ",label:"Tajikistan"},{value:"TZ",label:"Tanzania"},{value:"TH",label:"Thailand"},{value:"TL",label:"Timor-Leste"},{value:"TG",label:"Togo"},{value:"TK",label:"Tokelau"},{value:"TO",label:"Tonga"},{value:"TT",label:"Trinidad And Tobago"},{value:"TN",label:"Tunisia"},{value:"TR",label:"Turkey"},{value:"TM",label:"Turkmenistan"},{value:"TC",label:"Turks And Caicos Islands"},{value:"TV",label:"Tuvalu"},{value:"UG",label:"Uganda"},{value:"UA",label:"Ukraine"},{value:"AE",label:"United Arab Emirates"},{value:"GB",label:"United Kingdom"},{value:"US",label:"United States"},{value:"UM",label:"United States Outlying Islands"},{value:"UY",label:"Uruguay"},{value:"UZ",label:"Uzbekistan"},{value:"VU",label:"Vanuatu"},{value:"VE",label:"Venezuela"},{value:"VN",label:"Viet Nam"},{value:"VG",label:"Virgin Islands, British"},{value:"VI",label:"Virgin Islands, U.S."},{value:"WF",label:"Wallis And Futuna"},{value:"EH",label:"Western Sahara"},{value:"YE",label:"Yemen"},{value:"ZM",label:"Zambia"},{value:"ZW",label:"Zimbabwe"}]},E=p,h=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(v.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.props.results.map(function(a){switch(e.props.endpoint){case"consolidated_screening_list":return n.a.createElement(m,{key:a.id,name:a.name,item:a,endpoint:e.props.endpoint});case"trade_leads":return n.a.createElement(m,{key:a.id,title:a.title,item:a,endpoint:e.props.endpoint});case"trade_events":return n.a.createElement(m,{key:a.id,event_name:a.event_name,item:a,endpoint:e.props.endpoint});case"export_assistance_centers":return n.a.createElement(m,{key:a.id,item:a,endpoint:e.props.endpoint});case"international_office_locations":return n.a.createElement(m,{key:a.id,post:a.post,item:a,endpoint:e.props.endpoint});default:return null}});return n.a.createElement("div",{className:"resultsList"},n.a.createElement("p",null,this.props.total," results ","consolidated_screening_list"===this.props.endpoint?n.a.createElement("a",{href:p.consolidated_screening_list.moreInfo},"More Information About the Results"):null),a)}}]),a}(t.Component),S=l(20),g=l.n(S),f=l(26),C=l(25),y=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(c.a)(this,Object(b.a)(a).call(this))).fetchResults=function(){var a="".concat(E.baseUrl+E[e.props.endpoint].endpoint,"?api_key=").concat(e.props.API_KEY).concat(e.queryParams(),"&offset=").concat(10*(e.state.activePage-1));console.log("Fetching from: ".concat(a)),fetch(a).then(function(e){return e.json()}).then(function(a){return e.setState({results:a.results,totalItemsCount:a.total,submitted:!0})}).catch(function(e){return console.log(e)})},e.handleSubmit=function(a){a.preventDefault(),e.fetchResults()},e.clearResults=function(){e.setState({queryString:"",results:[],totalItemsCount:0,submitted:!1,activePage:1,selected:{value:"",label:"Select a Country"}})},e.state={queryString:"",results:[],totalItemsCount:0,submitted:!1,activePage:1,selected:{value:""}},e._onSelect=e._onSelect.bind(Object(d.a)(Object(d.a)(e))),e}return Object(v.a)(a,e),Object(o.a)(a,[{key:"_onSelect",value:function(e){this.setState({selected:e}),console.log("You selected ".concat(e.label,", which has code ").concat(e.value))}},{key:"handleChange",value:function(e){var a=e.target,l=a.name,t=a.value;this.setState(Object(i.a)({},l,t))}},{key:"queryParams",value:function(){switch(this.props.endpoint){case"consolidated_screening_list":return"&name=".concat(this.state.queryString,"&fuzzy_name=true");case"trade_leads":case"trade_events":return"&q=".concat(this.state.queryString,"&countries=").concat(this.state.selected.value);case"export_assistance_centers":return"&zip_codes=".concat(this.state.queryString);case"international_office_locations":return"&city=".concat(this.state.queryString,"&countries=").concat(this.state.selected.value);default:return null}}},{key:"handlePageChange",value:function(e){var a=this;this.setState({activePage:e},function(){return a.fetchResults()})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("form",{onSubmit:function(a){return e.handleSubmit(a)}},n.a.createElement("h3",null,"Search ",E[this.props.endpoint].title,":"),n.a.createElement("input",{type:"text",name:"queryString",placeholder:E[this.props.endpoint].placeholder||"Enter search query",value:this.state.queryString,onChange:function(a){return e.handleChange(a)}}),"trade_leads"===this.props.endpoint||"trade_events"===this.props.endpoint||"international_office_locations"===this.props.endpoint?n.a.createElement(f.a,{options:E.countriesList,placeholder:this.state.selected.label||"Select Country",onChange:this._onSelect,value:this.state.selected.value,className:"Dropdown",classNamePrefix:"react-select"}):null,n.a.createElement("button",{type:"submit"},n.a.createElement(C.a,{size:"2em"}))),this.state.submitted?n.a.createElement("div",{className:"results"},n.a.createElement(h,{results:this.state.results,total:this.state.totalItemsCount,endpoint:this.props.endpoint}),n.a.createElement("div",{className:"footer"},n.a.createElement(g.a,{activePage:this.state.activePage,totalItemsCount:this.state.totalItemsCount,firstPageText:"First",prevPageText:"<",nextPageText:">",lastPageText:"Last",onChange:function(a){return e.handlePageChange(a)}}),n.a.createElement("button",{type:"reset",id:"clearButton",onClick:this.clearResults},"Clear"))):null)}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(n.a.createElement(y,{endpoint:"consolidated_screening_list",API_KEY:"ShCzzrAkXLpMTsTlhFhUjD29"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.d1047d8c.chunk.js.map