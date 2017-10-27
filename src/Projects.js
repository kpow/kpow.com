import React, { Component } from 'react';
import 'whatwg-fetch';
import { Player, BigPlayButton, ControlBar } from 'video-react';

import {connect} from 'react-redux';
import * as actionCreators from './action_creators';

import {
  Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Card,
} from 'semantic-ui-react';

import Slider from 'react-slick';


class Projects extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      requestFailed: false,
    }

  }

  componentDidMount() { }

  onSlideChange = (data) =>{
    console.log('onSlideChange');
  }

  render() {

    if (!this.props.data) return <Container text><h1>Loading...</h1></Container>

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad:true,
      adaptiveHeight:false
    };

    return (
      <div>
      <Segment inverted vertical style={{margin:'8px'}}>
        <Container>

        <Header as='h1' dividing inverted
         style={{ paddingTop: '1em' }}
         content = 'projects'
         subheader="a few of the projects I've worked on"
        />


         <Slider {...settings} afterChange={this.onSlideChange}>

         {this.props.data.map((item, index) => (
             <div style={{width:"600px"}}>

             {item.content.video ? (

                <Player src={item.content.video.fileUrl} poster={item.content.image.imageUrl} muted>
                 <BigPlayButton position="center" />
               </Player>

             ) : ( <Image src={item.content.image.imageUrl} centered/> )}


                 <Grid columns={2} container stackable >
                   <Grid.Row>
                     <Grid.Column width={13}>
                       <Container className='project-caption'>
                       <h3>{item.content.title}</h3>
                       <p>{item.content.blurb.markdown}</p>
                       </Container>
                     </Grid.Column>
                     <Grid.Column width={3} verticalAlign='middle' textAlign='center'>
                       {item.content.url ? (
                         <Button primary href={item.content.url} target='_new' className='project-button'>
                            view project
                         </Button>
                       ) : ( <br /> )}
                     </Grid.Column>
                   </Grid.Row>
                 </Grid>

             </div>
           ))}
          </Slider>

        </Container>
      </Segment>
      </div>


    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.get('projectsData'),
  };
}

export const ProjectsContainer = connect(mapStateToProps,actionCreators)(Projects);
