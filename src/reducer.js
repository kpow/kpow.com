
import {Map, List, fromJS} from 'immutable';

function setState(state, newState) {
  //console.log(newState);
  return state.merge(newState);
}

function setStarsData(state, data) {
  return state.set('starsData',data);
}

function setBooksData(state, data) {
  return state.set('booksData',data);
}

function setProjectsData(state, data) {
  return state.set('projectsData',data);
}

function setInstagramsData(state, data) {
  return state.set('instagramFeedData',data);
}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'SET_STARS_DATA':
      return setStarsData(state, action.stars);
    case 'SET_BOOKS_DATA':
      return setBooksData(state, action.books);
    case 'SET_PROJECTS_DATA':
      return setProjectsData(state, action.projects);
    case 'SET_INSTAGRAMS_DATA':
      return setInstagramsData(state, action.instagrams);

  }
  return state;
}