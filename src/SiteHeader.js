import React, { Component } from 'react';
import {
  Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Card,
} from 'semantic-ui-react';
import { Link, Route, Switch } from 'react-router-dom';
import AllStarsLayout from './AllStarsLayout.js';

class SiteHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }

  render() {

    return (

      <Container>
      <Menu fixed='top' size='large' inverted>
        <Container>
        <Menu.Item  as={Link} to='/allstars'>allstars</Menu.Item>
        <Menu.Item  as={Link} to='/allbooks'>allbooks</Menu.Item>

        <Menu.Item as={Link} to='/resume'>resume</Menu.Item>
        <Menu.Item position='right' style={{padding:'5px'}}>
          <Link to='/'><h1 className="site-logo">kpow</h1></Link>
        </Menu.Item>
        </Container>
      </Menu>
      </Container>

    )
}
}

export default SiteHeader;
