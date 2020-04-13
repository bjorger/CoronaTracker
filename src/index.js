import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga'

ReactGA.initialize('UA-163432335-1');
ReactGA.pageview('/CoronaTracker')
ReactGA.pageview('/')
ReactGA.pageview('/Prevention')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Search
// https://medium.com/@imranhsayed/live-search-with-react-instant-search-pagination-6acd476af756
// Map
// https://www.freecodecamp.org/news/how-to-create-a-coronavirus-covid-19-dashboard-map-app-in-react-with-gatsby-and-leaflet/