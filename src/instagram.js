import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import ReactPlayer from 'react-player';

import { Button, Divider, Container, Grid, Header,Card, Icon,Modal, Image, Item, Label, Menu, Segment, Step, Table} from 'semantic-ui-react'
const Slider = require('react-slick').default;

export class InstagramFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false,
      currentPage:1,
      nextButtonDisabled:false,
      prevButtonDisabled:true,
      modalOpen: false,
      currentVideo:'https://scontent.cdninstagram.com/t50.2886-16/22431260_123113021720851_4878408048764256256_n.mp4',
      totalItemsInView:props.totalItemsInView || 4
    };

  }


  componentDidMount() {
    fetch('https://kpow.space/services/instagram.php')
      .then(response => {
        if (!response.ok) {  throw Error("Network request failed")  }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({ data: d.data });

        try {
          let data = this.state.data;
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
    let data = this.state.data;

    let totalPages = Math.floor(data.length/this.state.totalItemsInView);
    let nextPage = this.state.currentPage+1;
    let newSeed = nextPage*this.state.totalItemsInView;
    let newSeedOffset = (this.state.totalItemsInView-1)+newSeed;
    let toDisplayItems = [];
    if(nextPage>1){ this.setState({prevButtonDisabled: false}); }
    if(nextPage>totalPages-2){ this.setState({nextButtonDisabled: true}); }

    for(let i=newSeed; i<=newSeedOffset; i++){ toDisplayItems.push(data[i]); }

    this.setState({ currentPage:nextPage, displayItems: toDisplayItems });
  }
  prevPage = () =>{
     let data = this.state.data;

     let totalPages = Math.floor(data.length/this.state.totalItemsInView);
     let nextPage = this.state.currentPage-1;
     let newSeed = nextPage*this.state.totalItemsInView;
     let newSeedOffset = (this.state.totalItemsInView-1)+newSeed;
     let toDisplayItems = [];
     if(nextPage<1){ this.setState({prevButtonDisabled: true}); }
     if(nextPage<=totalPages-2){ this.setState({nextButtonDisabled: false}); }

     for(let i=newSeed; i<=newSeedOffset; i++){ toDisplayItems.push(data[i]); }

     this.setState({ currentPage:nextPage, displayItems: toDisplayItems });
  }

  handleOpen = (whichOne) => this.setState({ modalOpen: true, currentVideo:whichOne});
  handleClose = () => this.setState({ modalOpen: false });

  render() {

    if (this.state.requestFailed) return <Container text><h1>Failed!</h1></Container>
    if (!this.state.data) return <Container text><h1>Loading...</h1></Container>
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

             <Modal basic size='small'
               trigger={<Button size='mini' compact onClick={()=>{this.handleOpen(obj.videos.standard_resolution.url);}}>watch video</Button>}
               open={this.state.modalOpen}
               onClose={this.handleClose}>

               <Modal.Content>
               <ReactPlayer url={this.state.currentVideo} controls playing/>
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

        <Container>
          <Button.Group compact size='medium' style={{float:'right', paddingTop:'15px', marginBottom:'15px'}}>
            <Button onClick={this.prevPage} disabled={this.state.prevButtonDisabled} labelPosition='left' icon='left chevron' content='Prev' />
            <Button onClick={this.nextPage} disabled={this.state.nextButtonDisabled} labelPosition='right' icon='right chevron' content='Next' />
          </Button.Group>
        </Container>



      </div>
    );
  }
}
