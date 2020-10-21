import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Portfolio extends Component {
    render() {
        return (
            <div>
                <h1>Portfolio</h1>
                <button><Link Link to="/about/RatonNana">Click For Details</Link></button>
            </div>
        );
    }
}

export default Portfolio;