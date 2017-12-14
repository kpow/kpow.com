import React, { Component } from 'react'

import Stars from './Stars.js';

import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import { Container } from 'semantic-ui-react';


export default class AllStarsLayout extends Component {

  render() {    

    if (!this.props.data) return <Container text><h1>Loading...</h1></Container>

    // let imageArray = [];
    // this.props.data.map((item, index) => (
    //   imageArray.push({ 'img': `https://kpow.space/screenshots/screenshot${item.id}.jpg` })
    // ))

    return (
      <div style={{ paddingTop: '60px' }}>
        <Stars totalItemsInView={9} totalItems={this.props.totalStars} data={this.props.data} dataSetter={this.props.starSetter}/>
        <br /><br /><br /><br />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    totalStars: state.get('totalStars'),
    data: state.get('starsData'),
  };
}

export const AllStarsLayoutContainer = connect(mapStateToProps,actionCreators)(AllStarsLayout);
