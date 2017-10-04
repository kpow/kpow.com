import React, { Component } from 'react';
import { Row, Col, Thumbnail, Button, Carousel } from 'react-bootstrap';
import BookItem from './BookItem.js';


class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch('/static_data/books1.json')
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({ booksData: d });
        this.pushIt();
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

pushIt(){
  console.log();
  let data = this.state.booksData.GoodreadsResponse.reviews.review;
  this.setState({
    displayItems: [data[0], data[1], data[2]]
  });
}
  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.booksData) return <p>Loading...</p>
    if (!this.state.displayItems) return <p>Loading...</p>

    return (

      <div>
        <row>
        {this.state.displayItems.map((item, index) => (
          <Col xs={1} md={4}>
          <BookItem data={item} />
          </Col>
        ))}
        </row>
      </div>
    )
}
}

export default Books;
