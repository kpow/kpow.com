import React, { Component } from 'react';
import { Navbar, Jumbotron,Thumbnail, Button, Grid, Nav, NavItem, Carousel, Row, Col } from 'react-bootstrap';


class StarItem extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  componentDidMount() {

  }

  render() {

    let image1 = `https://kpow.space/screenshots/screenshot${this.props.data.id}.jpg`;

    return (
      <div>
         <Thumbnail src={image1} alt="242x200" className="thumbnailHeight">
           <h3>{this.props.data.title}</h3>
           <p>{this.props.data.summary}</p>
           <p>
             <Button
                bsStyle="primary"
                href={this.props.data.url} >
                Read Article
             </Button>&nbsp;
           </p>
         </Thumbnail>
      </div>
    )
  }
}

export default StarItem;
