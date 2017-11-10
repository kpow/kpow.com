import React, { Component } from 'react'
import {Container} from 'semantic-ui-react'

import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

import Projects from './Projects.js';
import Stars from './Stars.js';
import Books from './Books.js';
import InstagramFeed from './InstagramFeed.js';


export default class HomepageLayout extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = { totalItemsInView:[1,1,1]}
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => { 
    
      if (window.innerWidth < 996) {
        this.setState({ totalItemsInView: [1,1,1] });
      } else {
        this.setState({ totalItemsInView: [3,4,3] });
      }

   }

  instagramSetter(){
    console.log('instagramSetter');
  }

  render() {

    return (
      <div style={{marginTop:'25px'}}>
        {this.props.projects ? (<Projects data={this.props.projects} />) :
         ( <Container text><h1>Loading Projects...</h1></Container> )}

        {this.props.stars ? (<Stars totalItemsInView={this.state.totalItemsInView[0]} totalItems={this.props.totalStars} data={this.props.stars} dataSetter={this.props.starSetter} />) :
          ( <Container text><h1>Loading Stars...</h1></Container> )}
        {this.props.grams ? (<InstagramFeed totalItemsInView={this.state.totalItemsInView[1]} totalItems={this.props.grams.length} data={this.props.grams} dataSetter={this.instagramSetter}/>) :
          ( <Container text><h1>Loading Instagram...</h1></Container> )}
        {this.props.books ? (<Books totalItemsInView={this.state.totalItemsInView[2]} totalItems={this.props.books.length} data={this.props.books} dataSetter={this.props.bookSetter}/>) :
          ( <Container text><h1>Loading Books...</h1></Container> )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    totalStars : state.get('totalStars'),
    stars: state.get('starsData'),
    books: state.get('booksData'),
    grams: state.get('instagramFeedData'),
    projects: state.get('projectsData'),
  };
}

export const HomepageLayoutContainer = connect(mapStateToProps,actionCreators)(HomepageLayout);
