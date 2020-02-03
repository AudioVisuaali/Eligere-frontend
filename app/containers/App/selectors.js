import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the userPage state domain
 */

const selectAppDomain = state => state.global || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by App
 */

export const makeSelectUserLoadedInitial = () =>
  createSelector(selectAppDomain, substate => substate.userLoaded);

export const makeSelectUser = () =>
  createSelector(selectAppDomain, substate => substate.user);
