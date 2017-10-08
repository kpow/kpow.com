import React, { Component } from 'react'
import {Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Card,} from 'semantic-ui-react'

import Footer from './Footer.js';
import Projects from './Projects.js';
import Stars from './Stars.js';
import Books from './Books.js';
import SiteHeader from './SiteHeader.js'



export default class AllStarsLayout extends Component {

  render() {

    return (
      <div style={{marginTop:'75px'}}>


        <Books totalItemsInView={21}/>


      </div>
    )
  }
}
