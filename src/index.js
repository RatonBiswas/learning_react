import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

import {BrowserRouter as Router , Route, Link } from "react-router-dom"


const myroute=(

  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
      </ul>
      <Route exact path = "/" component={App}/>
      <Route  path = "/about" component={About}/>
      <Route  path = "/contact" component={Contact}/>
      <Route  path = "/portfolio" component={Portfolio}/>
    </div>
  </Router>
)


ReactDOM.render(myroute,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
