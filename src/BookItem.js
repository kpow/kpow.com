import React, { Component } from 'react';
import {  Button, Divider, Container, Grid, Card, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table } from 'semantic-ui-react'

class BookItem extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  componentDidMount() {

  }

  render() {
    let theBook = this.props.data.book;
    return (
      <div>

        <Card fluid as='a' href={theBook.link} target='_new' style={{minHeight:'470px', maxHeight:'470px', marginBottom:'20px'}}>
         <Image src={theBook.image_url} style={{height:200}} centered/>
         <Card.Content>
           <Card.Header>{theBook.title_without_series}</Card.Header>
           <Card.Meta>{theBook.authors.author.name}</Card.Meta>
           <Card.Description
                style={{maxHeight:'150px', minHeight:'150px', overflow:'hidden'}}
                dangerouslySetInnerHTML={{ __html: theBook.description }} />
         </Card.Content>
         <Card.Content extra>
           Avg. Rating: {theBook.average_rating} | Total Ratings: {theBook.ratings_count}
         </Card.Content>
       </Card>

      </div>

    )
  }
}

export default BookItem;
