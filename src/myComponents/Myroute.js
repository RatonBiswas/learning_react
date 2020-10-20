import React, { Component } from 'react';
import {Route} from 'react-router-dom' 
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/About'
class Myroute extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/portfolio" component={Portfolio}/>
            </div>
        );
    }
}

export default Myroute;