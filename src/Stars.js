import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Button, Divider, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table} from 'semantic-ui-react'
import StarItem from './StarItem.js';


class Stars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
      currentPage:1,
      nextButtonDisabled:false,
      prevButtonDisabled:true,
      totalItemsInView:props.totalItemsInView
    }
  }

  componentDidUpdate = () => {  }

  componentDidMount() {
    fetch('https://kpow.space/services/stars.php?page=1')
      .then(response => {
        if (!response.ok) {  throw Error("Network request failed")  }
        return response
      })
      .then(d => d.json())
      .then(d => {
        d.reverse();
        this.setState({ starsData: d });

        try {
          let data = this.state.starsData;
          let toDisplayItems = [];
          for(let i=1; i<=this.state.totalItemsInView; i++){
            toDisplayItems.push(data[i]);
          }
          this.setState({  displayItems:toDisplayItems });
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
      let data = this.state.starsData;

      let totalPages = Math.floor(data.length/this.state.totalItemsInView);
      let nextPage = this.state.currentPage+1;
      let newSeed = nextPage*this.state.totalItemsInView;
      let newSeedOffset = (this.state.totalItemsInView-1)+newSeed;
      let toDisplayItems = [];
      if(nextPage>1){ this.setState({prevButtonDisabled: false}); }
      if(nextPage>totalPages-2){ this.setState({nextButtonDisabled: true}); }

      for(let i=newSeed; i<=newSeedOffset; i++){ toDisplayItems.push(data[i]); }

      this.setState({ currentPage:nextPage, displayItems: toDisplayItems });
      ReactDOM.findDOMNode(this).scrollIntoView();
    }
    prevPage = () =>{
       let data = this.state.starsData;

       let totalPages = Math.floor(data.length/this.state.totalItemsInView);
       let nextPage = this.state.currentPage-1;
       let newSeed = nextPage*this.state.totalItemsInView;
       let newSeedOffset = (this.state.totalItemsInView-1)+newSeed;
       let toDisplayItems = [];
       if(nextPage<1){ this.setState({prevButtonDisabled: true}); }
       if(nextPage<=totalPages-2){ this.setState({nextButtonDisabled: false}); }

       for(let i=newSeed; i<=newSeedOffset; i++){ toDisplayItems.push(data[i]); }

       this.setState({ currentPage:nextPage, displayItems: toDisplayItems });
       ReactDOM.findDOMNode(this).scrollIntoView();
    }

    render() {

      if (this.state.requestFailed) return <p>Failed!</p>
      if (!this.state.starsData) return <Container text><h1>Loading...</h1></Container>
      if (!this.state.displayItems) return <Container text><h1>Loading...</h1></Container>

      return (

        <div>

          <Container>
            <Header as='h1' dividing
             style={{ marginBottom: '1em', marginTop:'1.25em' }}
             content = 'star feed'
             subheader="articles in my RSS feed that get a star :)"
             />
          </Container>

          <Grid columns={3} container stackable >
            <Grid.Row>
            {this.state.displayItems.map((item, index) => (
              <Grid.Column>
                <StarItem data={item} />
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

export default Stars;
