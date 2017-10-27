export function setState(state) {
  return { type: 'SET_STATE', state };
}

export function setStarsData(stars) {
  return { type: 'SET_STARS_DATA', stars };
}

export function setBooksData(books) {
  return { type: 'SET_BOOKS_DATA', books };
}

export function setInstagramsData(instagrams) {
  return { type: 'SET_INSTAGRAMS_DATA', instagrams };
}

export function setProjectsData(projects) {
  return { type: 'SET_PROJECTS_DATA', projects };
}
