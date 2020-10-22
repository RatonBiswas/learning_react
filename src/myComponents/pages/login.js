import React, { Component } from 'react';

class Login extends Component {

    login = ()=> {
        sessionStorage.setItem("username","ratonnana")
    }

    render() {
        return (
            <div>
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}

export default Login;