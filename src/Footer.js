import React, { Component } from 'react';
import {
  Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Segment,Visibility,Card,
} from 'semantic-ui-react';

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() { }

  render() {

    return (

      <Segment inverted vertical style={{ padding: '5em 0em', marginTop:'4.25em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header inverted as='h4' content='Built with' />
                <List link inverted>
                <List.Item>
                  This site is a built with JAM stack principles, React/Redux, Semantic UI, Webpack, PHP proxies and served by Apache. Built with data from a gaggle of APIs. It has continous integration with CodeShip.
                </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={2}>
                <Header inverted as='h4' content='APIs used' />
                <List link inverted>
                <List.Item as='a' href='https://elemeno.io'>elemeno.io</List.Item>
                <List.Item as='a' href='https://feedbin.com/'>Feedbin</List.Item>
                <List.Item as='a' href='https://www.goodreads.com/'>GoodReads</List.Item>
                <List.Item as='a' href='https://instagram.com'>Instagram</List.Item>
                <List.Item as='a' href='https://developer.marvel.com/'>Marvel Comics</List.Item>
                <List.Item as='a' href='https://api.phish.net/'>Phish.net</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Image src='https://graph.facebook.com/1169805863/picture' floated='left' verticalAlign='bottom'/>
                <Header as='h4' inverted subheader='Kevin Power' content='About Kpow' style={{ margin:0, marginBottom:'30px'}}/>

                <p>Interwebz wrangler. Tech Director and Developer at <a href='https://s2content.com'>S2</a>. Voracious reader and  dad extraordinaire. Music, Travel, Poker, Pugs, and Pixels.</p>
                <p>Beginning to form my <a href='https://en.wikipedia.org/wiki/Technological_singularity'>post-singularity</a> self with this website.</p>

              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Contact' />
                <List link inverted>
                  <List.Item as='a' href="mailto:kpow@kpow.com">kpow@kpow.com</List.Item>
                  <List.Item as='a' href="https://www.visualcv.com/kevin-power">resume</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

export default Footer;
