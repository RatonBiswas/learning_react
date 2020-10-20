import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom' 
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Notfound from './pages/Notfound'
class Myroute extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route component={Notfound}/>
                </Switch>
            </div>
        );
    }
}

export default Myroute;