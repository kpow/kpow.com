import React, { Component } from 'react';
import {
  Button, Divider, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table,
} from 'semantic-ui-react'
import BookItem from './BookItem.js';


class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
      currentPage:1,
      nextButtonDisabled:false,
      prevButtonDisabled:true
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

  nextPage = () =>{
    let data = this.state.booksData.GoodreadsResponse.reviews.review;

    let totalItemsInView = 3;
    let totalPages = Math.round(data.length/totalItemsInView);
      console.log(totalPages);
    let nextPage = this.state.currentPage+1;
    let newSeed = nextPage*totalItemsInView;
    if(nextPage>1){ this.setState({prevButtonDisabled: false}); }
    if(nextPage>totalPages-2){ this.setState({nextButtonDisabled: true}); }
    this.setState({  currentPage:nextPage,
                     displayItems: [data[newSeed], data[newSeed+1], data[newSeed+2]]
                   });
  }
  prevPage = () =>{
    let data = this.state.booksData.GoodreadsResponse.reviews.review;

    let totalItemsInView = 3;
    let totalPages = Math.round(data.length/totalItemsInView);

    let nextPage = this.state.currentPage-1;
    let newSeed = nextPage*totalItemsInView;
    if(nextPage<1){ this.setState({prevButtonDisabled: true}); }
    if(nextPage<=totalPages-2){ this.setState({nextButtonDisabled: false}); }
    this.setState({  currentPage:nextPage,
                     displayItems: [data[newSeed], data[newSeed+1], data[newSeed+2]]
                   });
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
        <Container>
          <Button.Group compact size='medium' style={{float:'right', paddingTop:'15px', marginBottom:'15px'}}>
            <Button onClick={this.prevPage} disabled={this.state.prevButtonDisabled} labelPosition='left' icon='left chevron' content='Prev' />
            <Button onClick={this.nextPage} disabled={this.state.nextButtonDisabled} labelPosition='right' icon='right chevron' content='Next' />
          </Button.Group>
        </Container>
      </div>
    )
}
}

export default Books;
