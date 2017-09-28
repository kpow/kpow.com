import React, { Component } from 'react';
import { Navbar, Jumbotron,Thumbnail, Button, Grid, Nav, NavItem, Carousel, Row, Col } from 'react-bootstrap';


class BookItem extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  componentDidMount() {

  }

  render() {
    console.log(this.props.data.book.title);
    let theBook = this.props.data.book;
    return (
      <div>
      <Thumbnail src={theBook.image_url} alt="242x200" className="thumbnailHeight">
        <h3>{theBook.title_without_series}</h3>
        <p className="book-description">{theBook.description}</p>
        <p>
          <Button
             bsStyle="primary"
             href={theBook.link} >
             check it out
          </Button>&nbsp;
        </p>
      </Thumbnail>

      </div>
    )
  }
}

export default BookItem;
