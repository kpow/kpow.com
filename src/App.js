import React, { Component } from 'react';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';



import {AllStarsLayoutContainer} from './AllStarsLayout.js';
import AllBooksLayout from './AllBooksLayout.js';
import {HomepageLayoutContainer} from './HomepageLayout.js';
import SiteHeader from './SiteHeader.js';
import Resume from './Resume.js'
import Footer from './Footer.js';

class App extends Component {
  render() {

    return (

      <div>
        <SiteHeader />
        <Switch>
          <Route exact path='/' component={HomepageLayoutContainer}/>
          <Route exact path='/allstars' component={AllStarsLayoutContainer}/>
          <Route exact path='/allbooks' component={AllBooksLayout}/>
          <Route exact path='/resume' component={Resume}/>
        </Switch>
        <Footer />
      </div>

    );
  }
}

export default App;
