import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class ReactDOM_Render extends Component {

    myFun(){
        var container = document.getElementById("myid");
        var element = <h1>My name is Raton Morningstar</h1>
        var callBack = function (){
            alert('This Clicked From ReactDom');
        }
       ReactDOM.render(element,container,callBack);
    }

    render() {
        return (
            <div>
                <button onClick={this.myFun}>Change</button>
                <h1 id="myid">My Name Raton nana</h1>
            </div>
        );
    }
}

export default ReactDOM_Render;
