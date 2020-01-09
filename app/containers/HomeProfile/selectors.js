import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the HomeProfile state domain
 */

const selectUserPageDomain = state => state.userPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomeProfile
 */

const makeSelectUserPage = () =>
  createSelector(
    selectUserPageDomain,
    substate => substate,
  );

export default makeSelectUserPage;
export { selectUserPageDomain };
