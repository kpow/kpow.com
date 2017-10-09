import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Button,Container,Divider,Embed, Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Card,} from 'semantic-ui-react'

export default class Resume extends Component {

  componentDidMount = () => { ReactDOM.findDOMNode(this).scrollIntoView(); }

  render() {

    return (
      <div style={{marginTop:'50px'}}>

        <Embed url='https://www.visualcv.com/kevin-power' defaultActive style={{height:'2100px'}}/>

      </div>
    )
  }
}
