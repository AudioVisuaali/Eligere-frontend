/*
 *
 * HomePollProvider reducer
 *
 */

import produce from 'immer';

import {
  POLL_SET,
  POLL_UPDATE,
  MOVIE_ADD,
  MOVIE_MODIFY,
  MOVIE_REMOVE,
} from './constants';

export const initialState = {
  poll: null,
  movies: null,
};

export const key = 'homePoll';

/* eslint-disable default-case, no-param-reassign */
const homePollProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case POLL_SET:
      case POLL_UPDATE:
        draft.poll = action.poll;
        break;

      case MOVIE_ADD:
        draft.poll.movies = [...state.poll.movies, action.movie];
        break;

      case MOVIE_MODIFY:
        draft.poll.movies = state.poll.movies.map(movie =>
          movie.identifier === action.movie.idenfier ? action.movie : movie,
        );
        break;

      case MOVIE_REMOVE:
        draft.poll.movies = state.poll.movies.filter(
          movie => movie.identifier !== action.movie.idenfier,
        );
        break;
    }
  });

export default homePollProviderReducer;
