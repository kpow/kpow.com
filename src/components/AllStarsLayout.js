import React, { Component } from 'react'

import Stars from './Stars.js';

import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export default class AllStarsLayout extends Component {

  render() {

    return (
      <div style={{marginTop:'75px'}}>

        {this.props.data && (<Stars totalItemsInView={9} totalItems={this.props.totalStars} data={this.props.data} dataSetter={this.props.starSetter}/> )}

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
