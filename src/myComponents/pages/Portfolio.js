import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
class Portfolio extends Component {
    render() {

        if(sessionStorage.getItem("username")==null) {
            return <Redirect to="/login"></Redirect>
        }else{
            return (
                <div>
                    <h1>Portfolio</h1>
                    <button><Link Link to="/about/RatonNana">Click For Details</Link></button>
                </div>
            );
        }

       
    }
}

export default Portfolio;