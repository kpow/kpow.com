import React, { Component } from 'react';

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch('https://kpow.space/services/projects.php')
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          projectsData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {

    if (this.state.requestFailed) return <p>Failed!</p>

    if (!this.state.projectsData) return <p>Loading...</p>

    return (
      <div>
        <h2>{this.state.projectsData.data[0].dateCreated}</h2>
      </div>
    )
  }
}

export default Projects;
