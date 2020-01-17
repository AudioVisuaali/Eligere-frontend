import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homeMovies domain
 */

const selectHomeMovies = state => state.homeMovies || initialState;

/**
 * Select the homeMovies mode
 */

const makeSelectHomeMovie = () =>
  createSelector(selectHomeMovies, homeMoviesState => homeMoviesState.movie);

const makeSelectHomeMovieTrailers = () =>
  createSelector(
    selectHomeMovies,
    homeMoviesState => homeMoviesState.movie.trailers,
  );

export { makeSelectHomeMovie, makeSelectHomeMovieTrailers };
