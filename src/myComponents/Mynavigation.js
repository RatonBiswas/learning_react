import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import NavLink from "react-bootstrap/NavLink";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./assets/css/bootstrap.min.css";
class Mynavigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <NavLink exact activeStyle={{color: "green"}} href="/">Home</NavLink>
            <NavLink exact activeStyle={{color: "green"}} href="/about">About</NavLink>
            <NavLink exact activeStyle={{color: "green"}} href="/contact">Contact</NavLink>
            <NavLink exact activeStyle={{color: "green"}} href="/portfolio">Portfolio</NavLink>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Mynavigation;
