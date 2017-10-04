import React, { Component } from 'react';
import { Row, Col, Thumbnail, Button, Carousel } from 'react-bootstrap';


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

    return (
      <div>
      <row>
      <style type="text/css">{`
      .btn-custom {
          background-color: purple;
          float:right;
          color:#fff;
          margin:10px;
          margin-right:100px;
          z-index:10000000;
      }
      `}</style>

          <Col xs={0} md={1}>

          </Col>

      <Col xs={12} md={10}>
        <Carousel indicators={false}>

        {this.state.projectsData.data.map((item, index) => (
          <Carousel.Item>
            <img width={1200} height={800} alt="900x500" src={item.content.image.imageUrl}/>
            <Carousel.Caption>
              <h3>{item.content.title}</h3>
              <p>{item.content.blurb.markdown}

              {item.content.url ? (

                <Button
                   bsStyle="custom"
                   href={item.content.url} >
                   view project
                </Button>
              ) : (
                <br />
              )}
              </p>

            </Carousel.Caption>
          </Carousel.Item>
        ))}

        </Carousel>
        </Col>
        <Col xs={0} md={1}>

        </Col>
        </row>
      </div>


    )
  }
}

export default Projects;
