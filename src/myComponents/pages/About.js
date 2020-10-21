import React, { Component } from 'react';

class About extends Component {
    constructor({match}){
        super();
        this.state = {
            myname:match.params.username
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.myname}</h1>
            </div>
        );
    }
}

export default About;