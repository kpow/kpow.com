import React, { Component } from 'react';
import {Image, Card } from 'semantic-ui-react'

class BookItem extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    //let bookImage = null;
    // fetch('https://api.microlink.io?url='+this.props.data.book.link)
    //   .then(response => response.json())
    //   .then(data => {
    //     bookImage = data;
    //     console.log(bookImage);
    //   });
  }

  render() {

    let theBook = this.props.data.book;
    let theRating = Number(this.props.data.rating);
    return (
      <div>

        <Card fluid as='a' href={theBook.link} target='_new' style={{minHeight:'470px', maxHeight:'470px', marginBottom:'20px'}}>
          {/*<Image src={"https://api.microlink.io?url=" + theBook.link+"&embed=image.url"} style={{height:200}} centered/>*/}
          <Image src={theBook.img} style={{ height: 200 }} centered />

         <Card.Content>
           <Card.Header>{theBook.tws}</Card.Header>
           <Card.Meta>{theBook.authors.author.name}</Card.Meta>
           <Card.Description
                style={{maxHeight:'150px', minHeight:'150px', overflow:'hidden'}}
                dangerouslySetInnerHTML={{ __html: theBook.desc }} />
         </Card.Content>
         <Card.Content extra>
         {theRating>0 ? (
           <span>I give it <strong>{theRating}</strong> stars</span>
         ) : (<span>{this.props.data.shelves.shelf[0]._name}</span> )}

         <span style={{ float: 'right' }}>avg. rating: <strong>{theBook.avr_rate}</strong> stars</span>

         </Card.Content>
        </Card>
      </div>

    )
  }
}

export default BookItem;
