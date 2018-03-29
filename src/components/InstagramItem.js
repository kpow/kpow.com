import React, { Component } from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';
import VideoModal from './VideoModal';

class InstagramItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Grid.Column>
        <Card fluid style={{ marginBottom: '20px' }}>
          <Image src={this.props.obj.images.standard_resolution.url} centered />
          <Card.Content>
            <Card.Header>{this.props.obj.caption.text}</Card.Header>
            <Card.Meta>{this.props.obj.location.name}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <VideoModal video={this.props.obj.videos.standard_resolution.url} />
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default InstagramItem;
