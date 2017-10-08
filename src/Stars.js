import React, { Component } from 'react';
import {
  Button, Divider, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table,
} from 'semantic-ui-react'
import StarItem from './StarItem.js';


class Stars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }


  componentDidMount() {
    fetch('https://kpow.space/services/stars.php?page=1')
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          starsData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }


    render() {

      if (this.state.requestFailed) return <p>Failed!</p>
      if (!this.state.starsData) return <p>Loading...</p>
      let displayItems =[this.state.starsData[27],
                         this.state.starsData[28],
                         this.state.starsData[29]
                       ];

      return (

        <div>

          <Container>
            <Header as='h1' dividing
             style={{ marginBottom: '1em', marginTop:'1.25em' }}
             content = 'star feed'
             subheader="articles in my RSS feed that get a star :)"
             />
          </Container>

          <Grid columns={3} container stackable>
            <Grid.Row>
            {displayItems.map((item, index) => (
              <Grid.Column>
                <StarItem data={item} />
              </Grid.Column>
            ))}
            </Grid.Row>
          </Grid>

        </div>
      )
  }
}

export default Stars;
