/*
 *
 * HomePollProvider reducer
 *
 */

import produce from 'immer';

import { getISODate } from 'utils/time';
import {
  POLL_SET,
  POLL_UPDATE,
  MOVIE_ADD,
  MOVIE_MODIFY,
  MOVIE_REMOVE,
  TRAILER_ADD,
  TRAILER_MODIFY,
  TRAILER_REMOVE,
  LOAD_AND_GOTO_POLL,
} from './constants';

export const initialState = {
  poll: null,
};

export const key = 'homePoll';

/* eslint-disable default-case, no-param-reassign */
const homePollProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case POLL_SET:
        draft.poll = {
          ...action.poll,
          opensAt: getISODate(action.poll.opensAt),
          closesAt: getISODate(action.poll.closesAt),
          community: action.poll.community
            ? { ...action.poll.community, __typename: undefined }
            : null,
        };
        break;

      case POLL_UPDATE: {
        const newPoll = {
          ...state.poll,
          ...action.poll,
          community: action.poll.community
            ? { ...action.poll.community, __typename: undefined }
            : null,
        };
        if (action.poll.opensAt) {
          newPoll.opensAt = getISODate(action.poll.opensAt);
        }
        if (action.poll.closesAt) {
          newPoll.closesAt = getISODate(action.poll.closesAt);
        }
        draft.poll = newPoll;
        break;
      }

      case MOVIE_ADD:
        draft.poll.movies = [action.movie, ...state.poll.movies];
        break;

      case MOVIE_MODIFY: {
        draft.poll.movies = state.poll.movies.map(movie =>
          movie.identifier === action.movie.identifier
            ? { ...movie, ...action.movie }
            : movie,
        );
        break;
      }

      case MOVIE_REMOVE:
        draft.poll.movies = state.poll.movies.filter(
          movie => movie.identifier !== action.movie.idenfier,
        );
        break;

      case TRAILER_ADD: {
        const movieIndex = state.poll.movies.findIndex(
          movie => movie.identifier === action.movie.identifier,
        );
        draft.poll.movies[movieIndex].trailers = [
          ...state.poll.movies[movieIndex].trailers,
          action.trailers,
        ];
        break;
      }

      case TRAILER_MODIFY: {
        draft.poll.movies = state.poll.movies.map(movie => ({
          ...movie,
          trailers: movie.trailers.map(trailer =>
            trailer.identifier === action.trailer.identifier
              ? action.trailer
              : trailer,
          ),
        }));
        break;
      }

      case TRAILER_REMOVE: {
        const movieIndex = state.poll.movies.findIndex(
          movie => movie.identifier === action.movie.identifier,
        );
        const newTrailers = state.poll.movies[
          movieIndex
        ].trailers.map(trailer =>
          trailer.identifier === action.trailer.identifier
            ? action.trailer
            : trailer,
        );
        state.poll.movies[movieIndex].trailers = newTrailers;
        break;
      }

      case LOAD_AND_GOTO_POLL: {
        console.log(action);
      }
    }
  });

export default homePollProviderReducer;
