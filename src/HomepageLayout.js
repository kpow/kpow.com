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

  componentDidMount(){
    
  }

  instagramSetter(){
    console.log('instagramSetter');
  }

  render() {

    return (
      <div style={{marginTop:'25px'}}>

        {this.props.projects ? (<Projects data={this.props.projects} />) :
         ( <Container text><h1>Loading...booty</h1></Container> )}

            <Responsive as={Segment} {...Responsive.onlyMobile}>
          {this.props.stars ? (<Stars totalItemsInView={1} totalItems={this.props.starIds.length} data={this.props.stars} dataSetter={this.props.starSetter} />) :
                 ( <Container text><h1>Loading...</h1></Container> )}
          {this.props.grams ? (<InstagramFeed totalItemsInView={1} totalItems={this.props.grams.length} data={this.props.grams} dataSetter={this.instagramSetter}/>) :
                 ( <Container text><h1>Loading...</h1></Container> )}
                {this.props.books ? (<Books totalItemsInView={1} data={this.props.books} dataSetter={this.props.bookSetter}/>) :
                 ( <Container text><h1>Loading...</h1></Container> )}
            </Responsive>
            <Responsive as={Segment} {...Responsive.onlyComputer}>
          {this.props.stars ? (<Stars totalItemsInView={3} data={this.props.stars} totalItems={this.props.starIds.length} dataSetter={this.props.starSetter}/>) :
                 ( <Container text><h1>Loading...</h1></Container> )}
          {this.props.grams ? (<InstagramFeed totalItemsInView={4} totalItems={this.props.grams.length} data={this.props.grams} dataSetter={this.instagramSetter} />) :
                  ( <Container text><h1>Loading...</h1></Container> )}
          {this.props.books ? (<Books totalItemsInView={3} data={this.props.books} totalItems={402} dataSetter={this.props.bookSetter}/>) :
                 ( <Container text><h1>Loading...</h1></Container> )}
            </Responsive>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    starIds : state.get('allStarIds'),
    stars: state.get('starsData'),
    books: state.get('booksData'),
    grams: state.get('instagramFeedData'),
    projects: state.get('projectsData'),
  };
}

export const HomepageLayoutContainer = connect(mapStateToProps,actionCreators)(HomepageLayout);
