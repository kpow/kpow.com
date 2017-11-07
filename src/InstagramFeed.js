import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Player, BigPlayButton, ControlBar } from 'video-react';

import { Button, Divider, Container, Grid, Header,Card, Icon,Modal, Image, Item, Label, Menu, Segment, Step, Table} from 'semantic-ui-react'
import CardNav from './CardNav.js';

export class InstagramFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      currentVideo:'https://scontent.cdninstagram.com/t50.2886-16/22431260_123113021720851_4878408048764256256_n.mp4',
      totalItemsInView:props.totalItemsInView || 4
    };

  }

  componentDidMount() { this.getDisplayData(); }

  getDisplayData = () => {
      let data = this.props.data;
      let toDisplayItems = [];
      for(let i=0; i<=this.state.totalItemsInView-1; i++){ toDisplayItems.push(data[i]); }
      this.setState({ displayItems: toDisplayItems });
  }

  setDisplayData = (data)=>{ this.setState({ displayItems: data }); }

  handleOpen = (whichOne) => this.setState({ modalOpen: true, currentVideo:whichOne});
  handleClose = () => this.setState({ modalOpen: false });

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
            <Grid.Column>
            <Card fluid style={{ marginBottom:'20px'}}>
             <Image src={obj.images.standard_resolution.url} centered/>
             <Card.Content>
              <Card.Header>{obj.caption.text}</Card.Header>
               <Card.Meta>{obj.location.name}</Card.Meta>

             </Card.Content>
             <Card.Content extra>

             <Modal basic size='large'
               trigger={<Button size='mini' compact onClick={()=>{this.handleOpen(obj.videos.standard_resolution.url);}}>watch video</Button>}
               open={this.state.modalOpen}
               onClose={this.handleClose}>

               <Modal.Content>
                 <Player src={this.state.currentVideo}>
                  <BigPlayButton position="center" />
                </Player>
               </Modal.Content>

               <Modal.Actions>
                 <Button color='grey' size='mini' onClick={this.handleClose} inverted>
                   <Icon name='close' /> close
                 </Button>
               </Modal.Actions>

             </Modal>

             </Card.Content>
           </Card>
            </Grid.Column>
          ))}
          </Grid.Row>
        </Grid>

        <CardNav totalItemsInView={this.state.totalItemsInView} totalItems={this.props.totalItems} data={this.props.data} setItems={this.setDisplayData} dataSetter={this.props.dataSetter} />

      </div>
    );
  }
}

export default InstagramFeed;
