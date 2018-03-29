import React, { Component } from 'react';

import Books from './Books.js';
import ImageStrip from './ImageStrip';
import { Container } from 'semantic-ui-react';

import { connect } from 'react-redux';
import * as actionCreators from '../action_creators';

export default class AllBooksLayout extends Component {
  componentDidMount() {}

  render() {
    if (!this.props.data)
      return (
        <Container text>
          <h1>Loading...</h1>
        </Container>
      );

    let imageArray = [];
    this.props.data.map((item, index) =>
      imageArray.push({ img: item.book.img })
    );

    return (
      <div style={{ paddingTop: '60px' }}>
        <ImageStrip data={imageArray} />
        {this.props.data && (
          <Books
            totalItemsInView={6}
            totalItems={403}
            data={this.props.data}
            dataSetter={this.props.bookSetter}
          />
        )}
        <br />
        <br />
        <br />
        <br />
        <ImageStrip data={imageArray} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.get('booksData')
  };
}

export const AllBooksLayoutContainer = connect(mapStateToProps, actionCreators)(
  AllBooksLayout
);
