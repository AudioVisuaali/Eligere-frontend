/**
 * Gets the repositories of the user from Github
 */

import { gql } from 'apollo-boost';
import { put, takeLatest } from 'redux-saga/effects';
import apolloClient from 'apolloClient';
import { startLoading, endLoading } from 'containers/ProgressBarTop/actions';
import history from 'utils/history';
import { generatePathHomePollMovie } from 'utils/paths';

import { movieSet } from './actions';
import { LOAD_AND_GOTO_MOVIE } from './constants';

const MOVIE_GET = gql`
  query($identifier: String!) {
    movie(identifier: $identifier) {
      identifier
      title
      thumbnail
      description
      released
      duration
      genres {
        id
        value
      }
      trailers {
        identifier
        platform
        url
        slug
        thumbnailURL
        title
      }
      ratings {
        imdb
        rottenTomatoes
        metacritic
        googleUsers
      }
      createdAt
      poll {
        identifier
        title
      }
    }
  }
`;

/**
 * Github repos request/response handler
 */
export function* getMovie(action) {
  try {
    yield put(startLoading());
    const res = yield apolloClient.query({
      query: MOVIE_GET,
      variables: { identifier: action.identifier },
    });

    const { movie } = res.data;
    history.push(generatePathHomePollMovie(movie));
    yield put(movieSet(movie));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(endLoading());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* movieData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_AND_GOTO_MOVIE, getMovie);
}
