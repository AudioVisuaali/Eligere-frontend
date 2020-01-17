/*
 *
 * HomeMoviesProvider reducer
 *
 */

import produce from 'immer';

import {
  MOVIE_SET,
  MOVIE_MODIFY,
  MOVIE_DELETE,
  TRAILER_ADD,
  TRAILER_MODIFY,
  TRAILER_DELETE,
} from './constants';

export const initialState = {
  movie: null,
};

export const key = 'homeMovies';

/* eslint-disable default-case, no-param-reassign */
const homeMoviesProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case MOVIE_SET:
        draft.movie = action.movie;
        break;

      case MOVIE_MODIFY:
        draft.movie = {
          ...state.movie,
          ...action.movie,
        };
        break;

      case MOVIE_DELETE:
        draft.movie = null;
        break;

      case TRAILER_ADD:
        draft.movie.trailers = [action.trailer, ...state.movie.trailers];
        break;

      case TRAILER_MODIFY:
        draft.movie.trailers = state.movie.trailers.map(t =>
          t.identifier === action.trailer.identifier ? action.trailer : t,
        );
        break;

      case TRAILER_DELETE:
        draft.movie.trailers = state.movie.trailers.filter(
          trailer => trailer.identifier !== action.trailer.identifier,
        );
        break;
    }
  });

export default homeMoviesProviderReducer;
