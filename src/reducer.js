
import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function setStarsData(state, data) {
  return state.set('starsData',data);
}

function setTotalStars(state, data) {
  let totalStars = data.length;
  return state.set('totalStars', totalStars);
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
    case 'SET_TOTAL_STARS':
      return setTotalStars(state, action.totalStars);  
    case 'SET_BOOKS_DATA':
      return setBooksData(state, action.books);
    case 'SET_PROJECTS_DATA':
      return setProjectsData(state, action.projects);
    case 'SET_INSTAGRAMS_DATA':
      return setInstagramsData(state, action.instagrams);
     default:
      return state; 
  }
  //return state;
}
