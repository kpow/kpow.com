import React, { Component } from 'react'

import {BooksContainer} from './Books.js';

import {connect} from 'react-redux';
import * as actionCreators from './action_creators';

export default class AllBooksLayout extends Component {
  componentDidMount() {
    console.log(this.props.data);
  }

  render() {

    return (
      <div style={{marginTop:'75px'}}>

      {this.props.data && ( <BooksContainer totalItemsInView={9}/> )}

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
