import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Card,
} from 'semantic-ui-react';




class CardNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage:1,
      nextButtonDisabled:false,
      prevButtonDisabled:true,
      totalItemsInView:props.totalItemsInView || 3
    }
  }

  componentDidMount() {

  }

  nextPage = () =>{
    let data = this.props.data;
    let totalPages = Math.floor(data.length/this.state.totalItemsInView);
    let nextPage = this.state.currentPage+1;
    let newSeed = nextPage*this.state.totalItemsInView-this.state.totalItemsInView;
    let newSeedOffset = (this.state.totalItemsInView-1)+newSeed;

    if(nextPage>1){ this.setState({prevButtonDisabled: false}); }
    if(nextPage==totalPages){ this.setState({nextButtonDisabled: true}); }

    let toDisplayItems = [];
    for(let i=newSeed; i<=newSeedOffset; i++){ toDisplayItems.push(data[i]); }

    this.setState({ currentPage:nextPage});
    this.props.setItems(toDisplayItems);

  }

  prevPage = () =>{
    let data = this.props.data;
    let totalPages = Math.floor(data.length/this.state.totalItemsInView);
    let nextPage = this.state.currentPage-1;
    let newSeed = nextPage*this.state.totalItemsInView-this.state.totalItemsInView;
    let newSeedOffset = (this.state.totalItemsInView-1)+newSeed;

    if(nextPage<=1){ this.setState({prevButtonDisabled: true}); }
    if(nextPage==totalPages){ this.setState({nextButtonDisabled: false}); }

    let toDisplayItems = [];
    for(let i=newSeed; i<=newSeedOffset; i++){ toDisplayItems.push(data[i]); }

    this.setState({ currentPage:nextPage});
    this.props.setItems(toDisplayItems);
  }

  render() {

    return (

      <Container>
        <Button.Group compact size='medium' style={{float:'right', paddingTop:'15px', marginBottom:'15px'}}>
          <Button onClick={this.prevPage} disabled={this.state.prevButtonDisabled} labelPosition='left' icon='left chevron' content='Prev' />
          <Button onClick={this.nextPage} disabled={this.state.nextButtonDisabled} labelPosition='right' icon='right chevron' content='Next' />
        </Button.Group>
      </Container>

    )
}
}

export default CardNav;
