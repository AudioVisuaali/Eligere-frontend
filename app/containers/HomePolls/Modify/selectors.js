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
    homePollState => homePollState.poll.movies,
  );

const makeSelectHomePollMovie = (identifier = null) =>
  createSelector(
    selectHomePoll,
    // eslint-disable-next-line no-sequences
    (a, b) => (a, b),
    (pollState, ownProps) =>
      pollState.poll.movies.find(m => {
        const { movieIdentifier } = ownProps.match.params;
        return m.identifier === (identifier || movieIdentifier);
      }),
  );

export {
  selectHomePoll,
  makeSelectHomePoll,
  makeSelectHomePollMovies,
  makeSelectHomePollMovie,
};
