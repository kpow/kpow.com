import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Grid, Nav, NavItem, Carousel, PageHeader } from 'react-bootstrap';
import './App.css';

import Projects from './Projects.js';
import Stars from './Stars.js';
import Books from './Books.js';
import Header from './Header.js';
import Footer from './Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />

          <Grid>
            <PageHeader><small></small></PageHeader>
            <PageHeader>k-projects</PageHeader>
            <Projects></Projects>
          </Grid>

          <Grid>
             <PageHeader>star feed<small> interesting things in my feed</small></PageHeader>
            <Stars></Stars>
          </Grid>

          <Grid>
             <PageHeader>goodreads feed<small> the books I am reading</small></PageHeader>
            <Books></Books>
          </Grid>

          <Footer />
      </div>

    );
  }
}

export default App;
