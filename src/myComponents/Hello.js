import React from 'react'

function Hello(props){

    function DoThis() {
        alert('This Clicked From Funtional Component');
    }
    return(
        <div class="hello">
            <button onClick={DoThis}>Click Me</button>
            <h1>Hello {props.name}.I thing you are  {props.age} years old</h1>
        </div>
    );
}

export default Hello