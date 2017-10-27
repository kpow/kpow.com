import React, { Component } from 'react'
import {Container,Responsive, Segment} from 'semantic-ui-react'

import {connect} from 'react-redux';
import * as actionCreators from './action_creators';

import Footer from './Footer.js';
import {ProjectsContainer} from './Projects.js';
import {StarsContainer} from './Stars.js';
import {BooksContainer} from './Books.js';
import SiteHeader from './SiteHeader.js';
import {InstagramFeedContainer} from './InstagramFeed.js';


export default class HomepageLayout extends Component {

  render() {

    return (
      <div style={{marginTop:'25px'}}>

        {this.props.projects ? (<ProjectsContainer />) :
         ( <Container text><h1>Loading...</h1></Container> )}

            <Responsive as={Segment} {...Responsive.onlyMobile}>
                {this.props.stars ? (<StarsContainer totalItemsInView={1}/>) :
                 ( <Container text><h1>Loading...</h1></Container> )}
                {this.props.grams ? (<InstagramFeedContainer totalItemsInView={1}/>) :
                 ( <Container text><h1>Loading...</h1></Container> )}
                {this.props.books ? (<BooksContainer totalItemsInView={1}/>) :
                 ( <Container text><h1>Loading...</h1></Container> )}
            </Responsive>
            <Responsive as={Segment} {...Responsive.onlyTablet}>
                {this.props.stars ? (<StarsContainer totalItemsInView={3}/>) :
                 ( <Container text><h1>Loading...</h1></Container> )}
                 {this.props.grams ? (<InstagramFeedContainer totalItemsInView={4}/>) :
                  ( <Container text><h1>Loading...</h1></Container> )}
                {this.props.books ? (<BooksContainer totalItemsInView={3}/>) :
                 ( <Container text><h1>Loading...</h1></Container> )}
            </Responsive>
            <Responsive as={Segment} {...Responsive.onlyComputer}>
                {this.props.stars ? (<StarsContainer totalItemsInView={3}/>) :
                 ( <Container text><h1>Loading...</h1></Container> )}
                 {this.props.grams ? (<InstagramFeedContainer totalItemsInView={4}/>) :
                  ( <Container text><h1>Loading...</h1></Container> )}
                {this.props.books ? (<BooksContainer totalItemsInView={3}/>) :
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
