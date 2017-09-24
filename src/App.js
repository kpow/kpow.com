import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Grid } from 'react-bootstrap';
import './App.css';

import Projects from './Projects.js';
import Stars from './Stars.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <Projects></Projects>
            <Stars></Stars>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>

    );
  }
}

export default App;
