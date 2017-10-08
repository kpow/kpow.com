import React, { Component } from 'react'
import {Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Card,} from 'semantic-ui-react'

import Footer from './Footer.js';
import Projects from './Projects.js';
import Stars from './Stars.js';
import Books from './Books.js';

const FixedMenu = () => (
  <Menu fixed='top' size='large' inverted>
    <Container>
    <Menu.Item as='a' active>home</Menu.Item>
    <Menu.Item as='a'href='https://www.visualcv.com/kevin-power' target='_new'>resume</Menu.Item>
    {/*<Menu.Item as='a'>books</Menu.Item>
    <Menu.Item as='a'>about</Menu.Item>*/}
    <Menu.Item position='right' style={{padding:0}}>
      <h1 className="site-logo">kpow.com</h1>
    </Menu.Item>
    </Container>
  </Menu>
)

export default class HomepageLayout extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

         <Segment inverted vertical
           style={{ minHeight: 700, padding: '1em 0em' }}>

           <Visibility
            onBottomPassed={this.showFixedMenu}
            onBottomVisible={this.hideFixedMenu}
            once={false}>

           <Container>
             <Menu inverted pointing secondary size='large'>
               <Menu.Item as='a' active>home</Menu.Item>
               <Menu.Item as='a'href='https://www.visualcv.com/kevin-power' target='_new'>resume</Menu.Item>
               {/*}<Menu.Item as='a'>books</Menu.Item>
               <Menu.Item as='a'>about</Menu.Item>*/}
               <Menu.Item position='right' style={{padding:0}}>
                 <h1 className="site-logo">kpow.com</h1>
               </Menu.Item>
             </Menu>
           </Container>

            </Visibility>

           <Projects />

         </Segment>

        <Stars />

        <Books />

        <Footer />

      </div>
    )
  }
}
