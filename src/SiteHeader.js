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
        <Menu.Item  as={Link} to='/'>home</Menu.Item>
        <Menu.Item  as={Link} to='/allstars'>allstars</Menu.Item>
        <Menu.Item  as={Link} to='/allbooks'>allbooks</Menu.Item>

        <Menu.Item as='a'href='https://www.visualcv.com/kevin-power' target='_new'>resume</Menu.Item>
        <Menu.Item position='right' style={{padding:'5px'}}>
          <h1 className="site-logo">kpow.com</h1>
        </Menu.Item>
        </Container>
      </Menu>
      </Container>

    )
}
}

export default SiteHeader;
