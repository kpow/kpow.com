import React, { Component } from 'react'
import {Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Card,} from 'semantic-ui-react'

import Stars from './Stars.js';

export default class AllStarsLayout extends Component {

  render() {

    return (
      <div style={{marginTop:'75px'}}>

        <Stars totalItemsInView={9}/>

      </div>
    )
  }
}
