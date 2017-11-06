import React, { Component } from 'react';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';



import {AllStarsLayoutContainer} from './AllStarsLayout.js';
import {AllBooksLayoutContainer} from './AllBooksLayout.js';
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

          <Route exact path='/' render={()=><HomepageLayoutContainer starSetter={this.props.starSetter} bookSetter={this.props.bookSetter} />}/>
          <Route exact path='/allstars' render={()=><AllStarsLayoutContainer starSetter={this.props.starSetter} />}/>
          <Route exact path='/allbooks' render={() => <AllBooksLayoutContainer bookSetter={this.props.bookSetter} />}/>
          <Route exact path='/resume' component={Resume}/>
        </Switch>
        <Footer />
      </div>

    );
  }
}

export default App;
