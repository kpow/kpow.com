import React, { Component } from 'react'
import {Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Card,} from 'semantic-ui-react'

import {StarsContainer} from './Stars.js';

import {connect} from 'react-redux';
import * as actionCreators from './action_creators';

export default class AllStarsLayout extends Component {

  render() {

    return (
      <div style={{marginTop:'75px'}}>

      {this.props.data && (
        <StarsContainer totalItemsInView={9}/>
      )}

      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    data: state.get('starsData'),
  };
}

export const AllStarsLayoutContainer = connect(mapStateToProps,actionCreators)(AllStarsLayout);
