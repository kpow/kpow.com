import React, { Component } from 'react';
import { Row, Col, Thumbnail, Button, Carousel, Nav, NavItem, Navbar } from 'react-bootstrap';


class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }

  render() {

    return (

      <Navbar inverse fixedBottom={false}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            <Navbar.Link href="#">checkit wreckit get buk nekid</Navbar.Link>
          </Navbar.Text>
          <Navbar.Text pullRight>
            Have a great day!
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
}
}

export default Footer;
