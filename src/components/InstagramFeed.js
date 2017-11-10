import React, { Component } from 'react';
import { Container, Grid, Header,Card, Image} from 'semantic-ui-react'
import CardNav from './CardNav.js';
import VideoModal from './VideoModal.js';
import { getDisplayData } from '../getDisplayData.js';

export class InstagramFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:props.data,
      totalItemsInView:props.totalItemsInView || 4
    };

  }

  componentDidMount() { getDisplayData(this.props.data, this.props.totalItemsInView, this.setDisplayData); }

  setDisplayData = (data)=>{ this.setState({ displayItems: data }); }

  render() {
  if (!this.state.displayItems) return <Container text><h1>Loading...</h1></Container>
    return (
      <div>
        <Container>
          <Header as='h1' dividing
           style={{ marginBottom: '1em', marginTop:'1.25em' }}
           content = 'instagram'
           subheader="these are music post from my instagram"
           />
        </Container>
        <Grid columns={this.state.totalItemsInView} container stackable >
          <Grid.Row>
          {this.state.displayItems.map((obj, i) => (
            <Grid.Column key={i}>
            <Card fluid style={{ marginBottom:'20px'}}>
             <Image src={obj.images.standard_resolution.url} centered/>
             <Card.Content>
              <Card.Header>{obj.caption.text}</Card.Header>
               <Card.Meta>{obj.location.name}</Card.Meta>
             </Card.Content>
             <Card.Content extra>
                    <VideoModal video={obj.videos.standard_resolution.url}/>
             </Card.Content>
           </Card>
            </Grid.Column>
          ))}
          </Grid.Row>
        </Grid>
        <CardNav totalItemsInView={this.state.totalItemsInView} totalItems={this.props.totalItems} data={this.state.data} setItems={this.setDisplayData} dataSetter={this.props.dataSetter} />
      </div>
    );
  }
}

export default InstagramFeed;
