import React, { Component } from 'react';
import { Row, Col, Thumbnail, Button } from 'react-bootstrap';
import StarItem from './StarItem.js';

class Stars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch('https://kpow.space/services/stars.php?page=1')
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          starsData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }


    render() {

      if (this.state.requestFailed) return <p>Failed!</p>
      if (!this.state.starsData) return <p>Loading...</p>
      let displayItems =[this.state.starsData[27],this.state.starsData[28],this.state.starsData[29]];

      return (

        <div>
          <row>
            {displayItems.map((item, index) => (
              <Col xs={6} md={4}>
                <StarItem data={item} />
              </Col>
            ))}
          </row>
        </div>
      )
  }
}

export default Stars;
