import React, { Component } from 'react';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            fname: " ",
            lname: " ",
            email: " ",
            number: " ",
        }
    }

    onChangeHandler = (event) => {
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({[inputName]: inputValue})

        if(inputName === "fname") {
            var namePattern = /^([a-zA-Z ]){2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({fname:"Name pattern is not valid"})
            }
        }
        if(inputName === "lname") {
            var namePattern = /^([a-zA-Z ]){2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({lname:"Name pattern is not valid"})
            }
        }
        if(inputName === "email") {
            var namePattern = /\S+@\S+\.\S+/;
            if(!namePattern.test(inputValue)){
                this.setState({email:"Not an email.Put the correct email"})
            }
        }
        if(inputName === "number") {
            if(!Number(inputValue)){
                this.setState({number:"Not a number"})
            }
        }

    }

    render() {
        return (
            <div>
                <p>First Name : {this.state.fname}</p>
                <p>Last  Name :{this.state.lname}</p>
                <p>Email : {this.state.email}</p>
                <p>Number: {this.state.number}</p>
                <form>
                    <input onChange={this.onChangeHandler} type="text" placeholder = "First Name" name="fname"></input><br></br>
                    <input onChange={this.onChangeHandler} type="text" placeholder = "Last  Name" name="lname"></input><br></br>
                    <input onChange={this.onChangeHandler} type="text" placeholder = "Email" name="email"></input><br></br>
                    <input onChange={this.onChangeHandler} type="text" placeholder = "Number" name="number"></input><br></br>
                    <input type="submit" value = "Save Now"></input><br></br>
                </form>
            </div>
        );
    }
}

export default Signup;