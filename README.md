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
    <script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
    
    <script>
      var endpoints = [
        "consolidated_screening_list",
        "trade_leads",
        "trade_events",
        "export_assistance_centers",
        "international_office_locations",
      ]
      var API_KEY="Your_API_key"; // get from http://api.trade.gov/
    </script>
    ```
* Remove any items from the `endpoints` array that are not needed for your application, and include your API_KEY.

3. For each widget desired, put `<div id="consolidated_screening_list"></div>` (substitute the name of the endpoint needed as the HTML id value) to where ever you'd like the widget to appear within the `<body>` of your HTML document.

*************************************************************************************************

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).