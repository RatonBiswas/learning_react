import React, { Component } from "react";
import  {ReceiveConsumer}  from "./Mycontext";

class Hello extends Component {
  render() {
    return (
      <div><h1>
        <ReceiveConsumer>
          {(message) => {
            return message;
          }}
        </ReceiveConsumer></h1>
      </div>
    );
  }
}

export default Hello;
