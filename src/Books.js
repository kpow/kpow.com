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
        this.setState({
          booksData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.booksData) return <p>Loading...</p>
    let displayItems =[this.state.booksData.GoodreadsResponse.reviews.review[0],
                       this.state.booksData.GoodreadsResponse.reviews.review[1],
                       this.state.booksData.GoodreadsResponse.reviews.review[2],
                       this.state.booksData.GoodreadsResponse.reviews.review[3]];
    console.log(displayItems[0]);
    return (

      <div>
        <row>
          {displayItems.map((item, index) => (
            <Col xs={6} md={6}>
            <BookItem data={item} />
            </Col>
          ))}
        </row>
      </div>
    )
}
}

export default Books;
