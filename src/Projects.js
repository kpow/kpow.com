import React, { Component } from 'react';
import 'whatwg-fetch';

import {
  Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Card,
} from 'semantic-ui-react';

import Slider from 'react-slick';


class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch('https://kpow.space/services/projects.php')
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          projectsData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.projectsData) return <p>Loading...</p>

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

         <Slider {...settings}>
         {this.state.projectsData.data.map((item, index) => (
             <div style={{width:"600px"}}>

               <Image src={item.content.image.imageUrl} centered/>

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

export default Projects;
