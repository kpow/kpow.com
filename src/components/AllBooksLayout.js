import React, { Component } from 'react'

import Books from './Books.js';

import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export default class AllBooksLayout extends Component {

  componentDidMount() {  }

  render() {

    return (
      <div className="all-layout">

        {this.props.data && (<Books totalItemsInView={9} totalItems={403} data={this.props.data} dataSetter={this.props.bookSetter} /> )}

      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    data: state.get('booksData'),
  };
}

export const AllBooksLayoutContainer = connect(mapStateToProps,actionCreators)(AllBooksLayout);
