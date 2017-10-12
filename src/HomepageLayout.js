import React, { Component } from 'react'
import {Button,Container,Divider,Grid,Header,Responsive, Icon,Image,List,Menu,Segment,Visibility,Card,} from 'semantic-ui-react'

import Footer from './Footer.js';
import Projects from './Projects.js';
import Stars from './Stars.js';
import Books from './Books.js';
import SiteHeader from './SiteHeader.js';
import {InstagramFeed} from './instagram';




export default class HomepageLayout extends Component {

  render() {

    return (
      <div style={{marginTop:'25px'}}>
        <Projects />

        <Responsive as={Segment} {...Responsive.onlyMobile}>
          <Stars totalItemsInView={1}/>
          <InstagramFeed totalItemsInView={1}/>
          <Books totalItemsInView={1}/>
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyTablet}>
          <Stars totalItemsInView={3}/>
          <InstagramFeed totalItemsInView={4}/>
          <Books totalItemsInView={3}/>
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyComputer}>
            <Stars totalItemsInView={3}/>
            <InstagramFeed totalItemsInView={4}/>
            <Books totalItemsInView={3}/>
        </Responsive>



      </div>
    )
  }
}
