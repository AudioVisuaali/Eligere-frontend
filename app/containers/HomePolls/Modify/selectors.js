import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePoll domain
 */

const selectHomePoll = state => state.homePoll || initialState;

/**
 * Select the homePoll mode
 */

const makeSelectHomePoll = () =>
  createSelector(
    selectHomePoll,
    homePollState => homePollState.poll,
  );

const makeSelectHomePollMovies = () =>
  createSelector(
    selectHomePoll,
    homePollState => homePollState.movies,
  );

export { selectHomePoll, makeSelectHomePoll, makeSelectHomePollMovies };
