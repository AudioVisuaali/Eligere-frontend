/*
 *
 * ThemeProvider actions
 *
 */

import {
  MOVIE_SET,
  MOVIE_MODIFY,
  MOVIE_DELETE,
  TRAILER_ADD,
  TRAILER_MODIFY,
  TRAILER_DELETE,
} from './constants';

export function movieSet(movie) {
  return {
    type: MOVIE_SET,
    movie,
  };
}

export function movieUpdate(movie) {
  return {
    type: MOVIE_MODIFY,
    movie,
  };
}

export function movieDelete(movie) {
  return {
    type: MOVIE_DELETE,
    movie,
  };
}

export function trailerAdd(trailer) {
  return {
    type: TRAILER_ADD,
    trailer,
  };
}

export function trailerUpdate(trailer) {
  return {
    type: TRAILER_MODIFY,
    trailer,
  };
}

export function trailerDelete(trailer) {
  return {
    type: TRAILER_DELETE,
    trailer,
  };
}
