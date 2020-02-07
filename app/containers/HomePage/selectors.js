import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage domain
 */

const selectHomePage = state => state.homePage || initialState;

/**
 * Select the homePage mode
 */

const makeSelectHomePagePoll = () =>
  createSelector(selectHomePage, homePageState => homePageState.poll);

const makeSelectHomePagePollMovies = () =>
  createSelector(selectHomePage, homePageState => homePageState.poll.movies);

const makeSelectHomePageMovie = () =>
  createSelector(selectHomePage, homePageState => homePageState.movie);

const makeSelectHomePageMovieTrailers = () =>
  createSelector(selectHomePage, homePageState => homePageState.movie.trailers);

const makeSelectHomePagePolls = () =>
  createSelector(selectHomePage, homePageState => homePageState.polls);

const makeSelectHomePageCommunities = () =>
  createSelector(selectHomePage, homePageState => homePageState.communities);

const makeSelectHomePageCommunity = () =>
  createSelector(selectHomePage, homePageState => homePageState.community);

export {
  makeSelectHomePagePoll,
  makeSelectHomePagePollMovies,
  makeSelectHomePageMovie,
  makeSelectHomePageMovieTrailers,
  makeSelectHomePagePolls,
  makeSelectHomePageCommunities,
  makeSelectHomePageCommunity,
};
