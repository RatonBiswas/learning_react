import React, { Component } from 'react';
import error from './../../error404.jpg'

class Notfound extends Component {
    render() {
        return (
            <div>
                <img src={error} className="error-logo" alt="logo" />
            </div>
        );
    }
}

export default Notfound;