/*
 *
 * ThemeProvider actions
 *
 */

import {
  POLL_SET,
  POLL_MODIFY,
  MOVIE_SET,
  MOVIE_MODIFY,
  TRAILER_ADD,
  TRAILER_MODIFY,
  TRAILER_REMOVE,
  LOAD_AND_GOTO_POLL,
  LOAD_AND_GOTO_MOVIE,
} from './constants';

export function pollSet(poll) {
  return {
    type: POLL_SET,
    poll,
  };
}

export function pollModify(poll) {
  return {
    type: POLL_MODIFY,
    poll,
  };
}

export function movieSet(movie) {
  return {
    type: MOVIE_SET,
    movie,
  };
}

export function movieModify(movie) {
  return {
    type: MOVIE_MODIFY,
    movie,
  };
}

export function trailerAdd(trailer) {
  return {
    type: TRAILER_ADD,
    trailer,
  };
}

export function trailerModify(trailer) {
  return {
    type: TRAILER_MODIFY,
    trailer,
  };
}

export function trailerRemove(trailer) {
  return {
    type: TRAILER_REMOVE,
    trailer,
  };
}

export function loadAndGotoPoll(identifier, showLoadingBar = true) {
  return {
    type: LOAD_AND_GOTO_POLL,
    identifier,
    showLoadingBar,
  };
}

export function loadAndGotoMovie(identifier, showLoadingBar = true) {
  return {
    type: LOAD_AND_GOTO_MOVIE,
    identifier,
    showLoadingBar,
  };
}
