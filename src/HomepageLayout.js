import React, { Component } from 'react'
import {Container,Responsive, Segment} from 'semantic-ui-react'

import {connect} from 'react-redux';
import * as actionCreators from './action_creators';

import Footer from './Footer.js';
import Projects from './Projects.js';
import Stars from './Stars.js';
import Books from './Books.js';
import InstagramFeed from './InstagramFeed.js';


export default class HomepageLayout extends Component {

  render() {

    return (
      <div style={{marginTop:'25px'}}>

        {this.props.projects ? (<Projects data={this.props.projects} />) :
         ( <Container text><h1>Loading...</h1></Container> )}

            <Responsive as={Segment} {...Responsive.onlyMobile}>
                {this.props.stars ? (<Stars totalItemsInView={1} data={this.props.stars}/>) :
                 ( <Container text><h1>Loading...</h1></Container> )}
                {this.props.grams ? (<InstagramFeed totalItemsInView={1} data={this.props.grams}/>) :
                 ( <Container text><h1>Loading...</h1></Container> )}
                {this.props.books ? (<Books totalItemsInView={1} data={this.props.books}/>) :
                 ( <Container text><h1>Loading...</h1></Container> )}
            </Responsive>
            <Responsive as={Segment} {...Responsive.onlyComputer}>
                {this.props.stars ? (<Stars totalItemsInView={3} data={this.props.stars}/>) :
                 ( <Container text><h1>Loading...</h1></Container> )}
                 {this.props.grams ? (<InstagramFeed totalItemsInView={4} data={this.props.grams}/>) :
                  ( <Container text><h1>Loading...</h1></Container> )}
                {this.props.books ? (<Books totalItemsInView={3} data={this.props.books}/>) :
                 ( <Container text><h1>Loading...</h1></Container> )}
            </Responsive>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stars: state.get('starsData'),
    books: state.get('booksData'),
    grams: state.get('instagramFeedData'),
    projects: state.get('projectsData'),
  };
}

export const HomepageLayoutContainer = connect(mapStateToProps,actionCreators)(HomepageLayout);
