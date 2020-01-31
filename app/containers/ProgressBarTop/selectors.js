import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the progressBarTop state domain
 */

const selectProgressBarTopDomain = state =>
  state.progressBarTop || initialState;

/**
 * Other specific selectors
 */

const makeSelectProgressBarTopLoading = () =>
  createSelector(selectProgressBarTopDomain, substate => substate.loading);

const makeSelectProgressBarTopProgress = () =>
  createSelector(selectProgressBarTopDomain, substate => substate.progress);

/**
 * Default selector used by ProgressBarTop
 */

const makeSelectProgressBarTop = () =>
  createSelector(selectProgressBarTopDomain, substate => substate);

export default makeSelectProgressBarTop;
export {
  selectProgressBarTopDomain,
  makeSelectProgressBarTopLoading,
  makeSelectProgressBarTopProgress,
};
