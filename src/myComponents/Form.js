import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            username: " "
        }
    }

    changeInputField=(event) => {
        var myname = event.target.name
        var myvalue = event.target.value
        this.setState({ [myname]: myvalue })
    }
    onSubmitValue=()=>{
        alert(this.state.username)
    }

    render() {
        return (
            <form onSubmit={this.onSubmitValue}>
                <p>This is my first From</p>
                <p>{this.state.username}</p>
                <input name="username" onChange={this.changeInputField} type="text" placeholder = "Your Name"></input>
                <input  type="submit" value = "Submit Now"></input>
            </form>
        );
    }
}

export default Form;