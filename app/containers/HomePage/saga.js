/**
 * Gets the repositories of the user from Github
 */

import { gql } from 'apollo-boost';
import { put, takeLatest } from 'redux-saga/effects';
import apolloClient from 'apolloClient';
import { getISODate } from 'utils/time';
import { startLoading, endLoading } from 'containers/ProgressBarTop/actions';
import history from 'utils/history';
import {
  pathHomePolls,
  pathHomeCommunities,
  generatePathHomeCommunity,
  generatePathHomePoll,
  generatePathHomePollMovie,
  pathHomeProfile,
} from 'utils/paths';
import { handleLoginAction } from 'containers/App/actions';

import {
  pollsSet,
  communitiesSet,
  communitySet,
  pollSet,
  movieSet,
} from './actions';
import {
  LOAD_AND_GOTO_POLL,
  LOAD_AND_GOTO_MOVIE,
  LOAD_AND_GOTO_POLLS,
  LOAD_AND_GOTO_COMMUNITIES,
  LOAD_AND_GOTO_COMMUNITY,
  LOAD_AND_GOTO_PROFILE,
} from './constants';

const POLL_GET = gql`
  query($identifier: String!) {
    poll(identifier: $identifier) {
      identifier
      title
      description
      requireUserForSuggesting
      opensAt
      closesAt
      totalVotes
      allowMovieSuggestions
      movies {
        identifier
        title
        thumbnail
      }
      community {
        identifier
      }
    }
  }
`;

/**
 * Github repos request/response handler
 */
export function* getPoll(action) {
  if (action.showLoadingBar) {
    yield put(startLoading());
  }

  try {
    const res = yield apolloClient.query({
      query: POLL_GET,
      variables: { identifier: action.identifier },
    });
    const newPoll = {
      ...res.data.poll,
      opensAt: getISODate(res.data.poll.opensAt),
      closesAt: getISODate(res.data.poll.closesAt),
    };

    history.push(generatePathHomePoll(newPoll));
    yield put(pollSet(newPoll));
  } catch (e) {
    // TODO ADD TOAST
    console.log(e);
  } finally {
    if (action.showLoadingBar) {
      yield put(endLoading());
    }
  }
}

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
  if (action.showLoadingBar) {
    yield put(startLoading());
  }

  try {
    const res = yield apolloClient.query({
      query: MOVIE_GET,
      variables: { identifier: action.identifier },
    });

    const { movie } = res.data;
    history.push(generatePathHomePollMovie(movie));
    yield put(movieSet(movie));
  } catch (e) {
    // TODO ADD TOAST
    console.log(e);
  } finally {
    if (action.showLoadingBar) {
      yield put(endLoading());
    }
  }
}

const POLLS_GET = gql`
  query {
    polls {
      identifier
      title
      description
      createdAt
      requireUserForSuggesting
      opensAt
      closesAt
    }
  }
`;

/**
 * Github repos request/response handler
 */
export function* getPolls(action) {
  if (action.showLoadingBar) {
    yield put(startLoading());
  }

  try {
    const res = yield apolloClient.query({
      query: POLLS_GET,
    });

    const { polls } = res.data;
    history.push(pathHomePolls);
    yield put(pollsSet(polls));
  } catch (e) {
    // TODO ADD TOAST
    console.log(e);
  } finally {
    if (action.showLoadingBar) {
      yield put(endLoading());
    }
  }
}

const COMMUNITIES_GET = gql`
  query {
    communities {
      identifier
      title
      description
      createdAt
    }
  }
`;

/**
 * Github repos request/response handler
 */
export function* getCommunities(action) {
  if (action.showLoadingBar) {
    yield put(startLoading());
  }

  try {
    const res = yield apolloClient.query({
      query: COMMUNITIES_GET,
    });

    const { communities } = res.data;
    yield put(communitiesSet(communities));
    history.push(pathHomeCommunities);
  } catch (e) {
    // TODO ADD TOAST
    console.log(e);
  } finally {
    if (action.showLoadingBar) {
      yield put(endLoading());
    }
  }
}

const PROFILE_GET = gql`
  query {
    checkSession {
      username
      name
      displayName
      createdAt
    }
  }
`;

/**
 * Github repos request/response handler
 */
export function* getProfile(action) {
  if (action.showLoadingBar) {
    yield put(startLoading());
  }

  try {
    const res = yield apolloClient.query({
      query: PROFILE_GET,
    });

    const user = res.data.checkSession;
    yield put(handleLoginAction(user));
    history.push(pathHomeProfile);
  } catch (e) {
    // TODO ADD TOAST
    console.log(e);
  } finally {
    if (action.showLoadingBar) {
      yield put(endLoading());
    }
  }
}

const COMMUNITY_GET = gql`
  query($identifier: String!) {
    community(identifier: $identifier) {
      identifier
      title
      description
      createdAt
      polls {
        identifier
        title
        description
        opensAt
        closesAt
      }
    }
  }
`;

/**
 * Github repos request/response handler
 */
export function* getCommunity(action) {
  if (action.showLoadingBar) {
    yield put(startLoading());
  }

  try {
    const res = yield apolloClient.query({
      query: COMMUNITY_GET,
      variables: { identifier: action.identifier },
    });

    const { community } = res.data;
    yield put(communitySet(community));
    history.push(generatePathHomeCommunity(community));
  } catch (e) {
    // TODO ADD TOAST
    console.log(e);
  } finally {
    if (action.showLoadingBar) {
      yield put(endLoading());
    }
  }
}

/**
 * HomaPage saga manages watcher lifecycle
 */
export default function* pollData() {
  // Watches for LOAD_AND_GOTO_POLL actions and calls getPoll when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_AND_GOTO_POLL, getPoll);
  yield takeLatest(LOAD_AND_GOTO_MOVIE, getMovie);
  yield takeLatest(LOAD_AND_GOTO_POLLS, getPolls);
  yield takeLatest(LOAD_AND_GOTO_COMMUNITIES, getCommunities);
  yield takeLatest(LOAD_AND_GOTO_COMMUNITY, getCommunity);
  yield takeLatest(LOAD_AND_GOTO_PROFILE, getProfile);
}
