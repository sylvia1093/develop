import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, InputGroup } from 'react-bootstrap';
import CreateDropDown from '../Dropdown/CreateDropDown';

import './homepagestyles.css';

class NavBar extends Component {
  state = {
    dropdown: false
  };

  dropDownHandler = () => {
    this.setState({ dropdown: !this.state.dropdown });
  };

  render() {
    return (
      <Navbar sticky="top" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ width: '80%' }}>
            <Form style={{ width: '100%' }} inline>
              <InputGroup className="inputgroup-wrapper">
                <FormControl
                  placeholder="Search"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                  className="search-field"
                />
                <InputGroup.Append>
                  <img
                    className="search-icon"
                    src="./search-icon.png"
                    alt="search"
                  />
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Nav>
          <div>
            <span onClick={this.dropDownHandler}>
              <img
                width="30px"
                className="mr-1 cursor-pointer"
                src="./add-icon.png"
                alt="add-icon"
              />
            </span>
            <img
              width="30px"
              className="cursor-pointer"
              src="./user-icon.png"
              alt="user-icon"
            />
          </div>
        </Navbar.Collapse>
        {this.state.dropdown ? <CreateDropDown /> : null}
      </Navbar>
    );
  }
}

export default NavBar;
