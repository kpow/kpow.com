import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const About = React.createClass({
  getInitialState() {
    return {show: false};
  },

  componentDidMount() {
    this.state.show=true;
  },

  render() {
    return (
      <div>

      </div>
    );
  }
});

export default About;
