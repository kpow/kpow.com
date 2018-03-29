import React, { Component } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import ProjectSlider from '../components/ProjectSlider';

class Projects extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Segment inverted vertical>
          <Container>
            <Header
              as="h1"
              dividing
              inverted
              style={{ paddingTop: '1em' }}
              content="projects"
              subheader="a few of the projects I've worked on"
            />

            <ProjectSlider props={this.props} />
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Projects;
