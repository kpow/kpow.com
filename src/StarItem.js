import React, { Component } from 'react';
import {
  Button, Divider, Container, Grid, Card, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table,
} from 'semantic-ui-react';
import Moment from 'moment';

class StarItem extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  componentDidMount() {

  }

  render() {

    let image1 = `https://kpow.space/screenshots/screenshot${this.props.data.id}.jpg`;
    let articleTime = Moment(this.props.data.published).calendar();

    return (
      <div>
      <Card as='a'
        style={{minHeight:'375px', maxHeight:'375px'}}
        image={image1}
        header={this.props.data.title}
        href={this.props.data.url}
        target='_new'
        meta={this.props.data.author}
        description={this.props.data.summary}
        extra={articleTime}
      >

      </Card>
      </div>
    )
  }
}

export default StarItem;
