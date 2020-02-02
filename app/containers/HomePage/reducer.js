/*
 *
 * HomePollProvider reducer
 *
 */

import produce from 'immer';

import { getISODate } from 'utils/time';
import {
  POLLS_SET,
  COMMUNITIES_SET,
  POLL_SET,
  POLL_MODIFY,
  MOVIE_SET,
  MOVIE_MODIFY,
  TRAILER_ADD,
  TRAILER_MODIFY,
  TRAILER_REMOVE,
} from './constants';

export const initialState = {
  polls: null,
  poll: null,
  communities: null,
  movie: null,
};

export const key = 'homePage';

const mergePolls = (newPoll, oldPoll = {}) => {
  const { opensAt, closesAt, community, ...restNewPoll } = newPoll;
  const combinedPoll = {
    community: null,
    ...oldPoll,
    ...restNewPoll,
  };
  if (opensAt) {
    combinedPoll.opensAt = getISODate(opensAt);
  }
  if (closesAt) {
    combinedPoll.closesAt = getISODate(closesAt);
  }
  if (community) {
    combinedPoll.community = {
      ...community,
      __typename: undefined,
    };
  }
  return combinedPoll;
};

/* eslint-disable default-case, no-param-reassign */
const homePollProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case POLLS_SET:
        draft.polls = action.polls;
        break;

      case COMMUNITIES_SET:
        draft.communities = action.communities;
        break;

      case POLL_SET:
        draft.poll = mergePolls(action.poll);
        break;

      case POLL_MODIFY:
        draft.poll = mergePolls(action.poll, state.poll);
        break;

      case MOVIE_SET:
        draft.movie = action.movie;
        break;

      case MOVIE_MODIFY:
        draft.movie = {
          ...state.movie,
          ...action.movie,
        };
        break;

      case TRAILER_ADD:
        draft.movie.trailers = [action.trailer, ...state.movie.trailers];
        break;

      case TRAILER_MODIFY:
        draft.movie.trailers = state.movie.trailers.map(t =>
          t.identifier === action.trailer.identifier ? action.trailer : t,
        );
        break;

      case TRAILER_REMOVE:
        draft.movie.trailers = state.movie.trailers.filter(
          trailer => trailer.identifier !== action.trailer.identifier,
        );
        break;
    }
  });

export default homePollProviderReducer;
