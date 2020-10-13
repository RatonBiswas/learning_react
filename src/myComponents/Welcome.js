import React,{Component} from 'react';

class Welcome extends Component {
   DoThisClass() {
        alert('This Clicked From Class Component');
    }
    render() {
        
    return <div>
            <h1>Welcome message {this.props.name} from {this.props.location}.</h1>
            </div>
    }
}

export default Welcome

