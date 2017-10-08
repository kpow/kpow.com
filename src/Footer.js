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

  componentDidMount() {

  }

  render() {

    return (

      <Segment inverted vertical style={{ padding: '5em 0em', marginTop:'3em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Contact' />
                <List link inverted>
                  <List.Item as='a' href="mailto:kpow@kpow.com">kpow@kpow.com</List.Item>
                  <List.Item as='a' href="https://www.visualcv.com/kevin-power">resume</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Other Stuff' />
                <List link inverted>


                </List>
              </Grid.Column>
              <Grid.Column width={9}>
                <Image src='http://graph.facebook.com/1169805863/picture' floated='left' verticalAlign='bottom'/>
                <Header as='h4' inverted subheader='Kevin Power' content='About Kpow' style={{ margin:0, marginBottom:'30px'}}/>

                <p>Interwebz wrangler. Tech Director and Developer at <a href='https://s2content.com'>S2</a>. Voracious reader and  dad extraordinaire. Music, Travel, Poker, Pugs, and Pixels.</p>
                <p>Beginning to form my <a href='https://en.wikipedia.org/wiki/Technological_singularity'>post-singularity</a> self with this website.</p>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
}
}

export default Footer;
