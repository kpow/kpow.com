import React, { Component } from 'react';
import { Container, Image } from 'semantic-ui-react';

class ImageStrip extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  componentDidMount() {}

  render() {
    let allDisplayData = this.props.data;
    let displayData = null;
    displayData = allDisplayData.reverse();

    return (
      <Container
        fluid
        style={{
          height: '139px',
          backgroundColor: '#000',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }}>
        {displayData.map((item, index) => (
          <Image key={index} src={item.img} height="139px" inline />
        ))}
      </Container>
    );
  }
}

export default ImageStrip;
