import React, { Component } from 'react'
import {Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Card,} from 'semantic-ui-react'

import {BooksContainer} from './Books.js';

import {connect} from 'react-redux';
import * as actionCreators from './action_creators';

export default class AllBooksLayout extends Component {

  render() {

    return (
      <div style={{marginTop:'75px'}}>

        {this.props.data && (
          <BooksContainer totalItemsInView={9}/>
        )}

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
