import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import {AllStarsLayoutContainer} from './AllStarsLayout.js';
import {AllBooksLayoutContainer} from './AllBooksLayout.js';
import {HomepageLayoutContainer} from './HomepageLayout.js';
import SiteHeader from './SiteHeader.js';
import Resume from './Resume.js'
import SiteFooter from './SiteFooter.js';

import '../semantic/semantic.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "video-react/dist/video-react.css";

import './App.css';

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
        <SiteFooter />
      </div>

    );
  }
}

export default App;
