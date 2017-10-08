import React, { Component } from 'react';
import {
  Button, Divider, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table,
} from 'semantic-ui-react'
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
        if (!response.ok) {  throw Error("Network request failed")  }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({ booksData: d });

        try {
          let data = this.state.booksData.GoodreadsResponse.reviews.review;
          this.setState({  displayItems: [data[0], data[1], data[2]] });
        }
        catch(err) {
          this.setState({requestFailed: true});
        }

      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.booksData) return <p>Loading...</p>
    if (!this.state.displayItems) return <p>Loading...</p>

    return (

      <div>

        <Container>
          <Header as='h1' dividing
           style={{ marginBottom: '1em', marginTop:'1.25em' }}
           content = 'book feed'
           subheader="what I'm reading courtesy of goodreads"
           />
        </Container>

        <Grid columns={3} container stackable>
          <Grid.Row>
          {this.state.displayItems.map((item, index) => (
            <Grid.Column>
              <BookItem data={item} />
            </Grid.Column>
          ))}
          </Grid.Row>
        </Grid>

      </div>
    )
}
}

export default Books;
