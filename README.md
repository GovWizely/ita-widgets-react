[![Build Status](https://travis-ci.org/GovWizely/ita-widgets-react.svg?branch=master)](https://travis-ci.org/GovWizely/ita-widgets-react)

# Search Widgets for ITA

These are HTML search widgets written in React, intended to replicate the behavior of these: https://developer.trade.gov/search-widgets.html

List of widgets:
* Consolidated Screening List
* Trade Leads
* Trade Events
* Export Assistance Centers
* International Office Locations

## To embed this widget in your page:
1. In `src/index.js`, uncomment either line 7 or line 10 depending on how you'd like to pass in the endpoint and API_KEY.
    a. To pass them in from your HTML document, uncomment line 7, and include this in the `<head>` of your HTML:
    ```html
    <script>
      var endpoint="consolidated_screening_list"; /* or one of the following: "trade_leads", "trade_events", "export_assistance_centers", "international_office_locations" */
      var API_KEY={your_api_key};
    </script>
    ```
    b. To specify the endpoint and API_KEY directly in the script, uncomment line 10 and include your API_KEY and desired endpoint (endpoints include the quotation marks): "consolidated_screening_list", "trade_leads", "trade_events", "export_assistance_centers", "international_office_locations".

2. Comment out or delete lines 14-45.
3. Add `<div id="widget-container"></div>` to where ever you'd like the widget to appear within the `<body>` of your HTML document.

---------------------------

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