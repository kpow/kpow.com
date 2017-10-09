import React, { Component } from 'react'
import {Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Card,} from 'semantic-ui-react'

import Books from './Books.js';

export default class AllBooksLayout extends Component {

  render() {

    return (
      <div style={{marginTop:'75px'}}>


        <Books totalItemsInView={9}/>


      </div>
    )
  }
}
