import React, { Component } from 'react';
import {Card} from 'semantic-ui-react';
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
      <Card fluid as='a'
        style={{minHeight:'400px', maxHeight:'400px', marginBottom:'20px'}}
        image={image1}
        header={this.props.data.title}
        href={this.props.data.url}
        target='_new'
        meta={this.props.data.author}
        description={this.props.data.summary}
        extra={articleTime}>
      </Card>
      </div>
    )
  }
}

export default StarItem;
