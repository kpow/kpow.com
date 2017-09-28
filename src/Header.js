import React, { Component } from 'react';
import { Row, Col, Thumbnail, Button, Carousel, Nav, NavItem, Navbar } from 'react-bootstrap';
import About from './About.js';


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }

  render() {

    return (

      <Navbar inverse collapseOnSelect fixedTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">kpow.com</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Stars</NavItem>
            <NavItem eventKey={2} href="#">Books</NavItem>

          </Nav>

        </Navbar.Collapse>
        <About />
      </Navbar>
    )
}
}

export default Header;
