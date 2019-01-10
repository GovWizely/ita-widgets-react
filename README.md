[![Build Status](https://travis-ci.org/GovWizely/ita-widgets-react.svg?branch=master)](https://travis-ci.org/GovWizely/ita-widgets-react)

# Search Widgets for ITA

These are HTML search widgets written in React, intended to replicate the behavior of these: https://developer.trade.gov/search-widgets.html

List of widgets:
* Consolidated Screening List
* Trade Leads
* Trade Events
* Export Assistance Centers
* International Office Locations

## How to embed this widget in your page

1. Download the JavaScript and CSS source files and host them on your site.
2. Add the following to the `<head>` of your HTML document:

  ```html
  <link rel="stylesheet" type="text/css" href="widget.css">
  <script type="text/javascript" src="widget.js"></script>
  <script>
    var endpoints = {
      "consolidated_screening_list": "div-ID_for_CSL_widget",
      "trade_leads": "div-ID_for_trade_leads_widget",
      "trade_events": "div-ID_for_trade_events_widget",
      "export_assistance_centers": "div-ID_for_EAC_widget",
      "international_office_locations": "div-ID_for_IOL_widget",
    };
    var API_KEY="Your_API_key"; // get it from http://api.trade.gov/

    document.addEventListener("DOMContentLoaded", function() {
      window.Explorer.renderWidget(endpoints, API_KEY);
    });
  </script>
  ```

* The `endpoints` object should contain a key-value pair for each endpoint name and corresponding div ID where you'd like that particular widget to appear. Remove any object/value pairs from the `endpoints` array that are not needed for your application, and include your API_KEY as a separate variable.

3. For each widget desired, put `<div id="ID_from_the_object"></div>` (substitute the ID used in the object above as the HTML id value) to where ever you'd like the widget to appear within the `<body>` of your HTML document.