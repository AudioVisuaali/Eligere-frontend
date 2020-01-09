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
