import React,{Component} from 'react';

class ReactState extends Component {
    constructor() {
        super();
        this.state = {
            name: "Raton Nana",
            age: "20",
            height: "5 feet 7 inch",
            weight: "54 KG"
        }
    }
    render() {
    return <div>

            <h1>My name is : {this.state.name}</h1>
            <h1>I am {this.state.age} years old</h1>
            <h1>My height is : {this.state.height}</h1>
            <h1>My weight is : {this.state.weight}</h1>

        </div>
    }
}

export default ReactState