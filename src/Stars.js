import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {  Container, Grid, Header,} from 'semantic-ui-react';

import StarItem from './StarItem.js';
import CardNav from './CardNav.js';


class Stars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:props.data,
      totalItemsInView:props.totalItemsInView || 3
    }
  }

  componentDidUpdate = () => {

    if(this.state.totalItemsInView>3){
      window.scrollTo(0,0);
    }

    
  }

  componentDidMount() {  this.getDisplayData(); }

  getDisplayData = () => {

      let data = this.state.data;
      let toDisplayItems = [];

      for(let i=0; i<=this.state.totalItemsInView-1; i++){
        toDisplayItems.push(data[i]);
      }

      this.setState({ displayItems: toDisplayItems });

  }

  setDisplayData = (data)=>{ this.setState({ displayItems: data }); }

  render() {

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
            <Grid.Column key={index}>
              <StarItem key={index} data={item} />
            </Grid.Column>
          ))}
          </Grid.Row>
        </Grid>

        <CardNav totalItemsInView={this.state.totalItemsInView} totalItems={this.props.totalItems} data={this.props.data} setItems={this.setDisplayData} dataSetter={this.props.dataSetter}/>
      </div>
    )
  }
}

export default Stars;
