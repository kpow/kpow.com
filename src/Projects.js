import React, { Component } from 'react';

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
      lazyLoad:true
    };

    return (
      <div>
      <Segment inverted vertical style={{ minHeight: 700 }}>
        <Container>

        <Header as='h1' dividing inverted
         style={{ paddingTop: '1em' }}
         content = 'k-projects'
         subheader="a few of the projects I've worked on"
          />

         <Slider {...settings}>
         {this.state.projectsData.data.map((item, index) => (
             <div style={{width:"600px"}}>
             {item.content.url ? (
               <Button primary href={item.content.url} target='_new' className='project-button'>
                  view project
               </Button>
             ) : ( <br /> )}
               <Image src={item.content.image.imageUrl} style={{height:400}} centered/>
               <Container text className='project-caption'>
                 <h3>{item.content.title}</h3>
                 <p>{item.content.blurb.markdown}</p>
                 </Container>
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
