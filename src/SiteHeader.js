import React, { Component } from 'react';
import {
  Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Card,
} from 'semantic-ui-react';
import { Link, Route, Switch } from 'react-router-dom';

class SiteHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }

  render() {

    return (

      <div>
      <Menu fixed='top' size='large' inverted compact>
        <Container>
        <Menu.Item style={{padding:'10px', paddingRight:'15px', paddingLeft:'0'}} as={Link} to='/'>
          <h1 className="site-logo">kpow</h1>
        </Menu.Item>
        <Menu.Item position='right' as={Link} to='/allstars'>allstars</Menu.Item>
        <Menu.Item  as={Link} to='/allbooks'>allbooks</Menu.Item>
        <Menu.Item as={Link} to='/resume'>resume</Menu.Item>

        </Container>
      </Menu>
      </div>

    )
}
}

export default SiteHeader;
