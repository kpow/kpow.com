import React, { Component } from 'react';

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

    let title = this.state.starsData[0].title;
    let image = `https://kpow.space/screenshots/screenshot${this.state.starsData[0].id}.jpg`;
    let summary = this.state.starsData[0].summary;
    let url = this.state.starsData[0].url;

    return (
      <div>
        <h2>{title}</h2>
        <img src={image} alt="screen" />
        <p>{summary}</p>
        <a href={url}>
        <p>click</p>
        </a>
      </div>
    )
  }
}

export default Stars;
