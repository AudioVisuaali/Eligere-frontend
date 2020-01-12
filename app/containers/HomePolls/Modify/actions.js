/*
 *
 * ThemeProvider actions
 *
 */

import {
  POLL_SET,
  POLL_UPDATE,
  MOVIE_ADD,
  MOVIE_MODIFY,
  MOVIE_REMOVE,
  TRAILER_ADD,
  TRAILER_MODIFY,
  TRAILER_REMOVE,
} from './constants';

export function setPoll(poll) {
  return {
    type: POLL_SET,
    poll,
  };
}

export function pollUpdate(poll) {
  return {
    type: POLL_UPDATE,
    poll,
  };
}

export function movieAdd(movie) {
  return {
    type: MOVIE_ADD,
    movie,
  };
}

export function movieModify(movie) {
  return {
    type: MOVIE_MODIFY,
    movie,
  };
}

export function movieRemove(movie) {
  return {
    type: MOVIE_REMOVE,
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
