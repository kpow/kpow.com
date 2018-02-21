import React, { Component } from 'react';
import { Container,Menu} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Skull from '../images/skull2.svg';

class SiteHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {

    return (

      <div>
      <Menu fixed='top' size='large' inverted compact>
        <Container>
            <Menu.Item style={{ padding: '0'}} as={Link} to='/'>
              <h1 className="site-logo">
                <img height='50' style={{ display: 'inline-block', paddingTop: '3px', paddingBottom: '5px', verticalAlign: 'middle'  }} src={Skull} />
                <span style={{ display: 'inline-block', paddingRight: '5px',paddingTop:'5px', height: '50px', verticalAlign:'middle' }}>kpow</span>
              </h1>
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
