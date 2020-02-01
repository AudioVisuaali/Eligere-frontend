/**
 * Gets the repositories of the user from Github
 */

import { gql } from 'apollo-boost';
import { put, takeLatest } from 'redux-saga/effects';
import apolloClient from 'apolloClient';
import { getISODate } from 'utils/time';
import { startLoading, endLoading } from 'containers/ProgressBarTop/actions';
import history from 'utils/history';
import { generatePathHomePoll } from 'utils/paths';

import { setPoll } from './actions';
import { LOAD_AND_GOTO_POLL } from './constants';

const POLL_GET = gql`
  query($identifier: String!) {
    poll(identifier: $identifier) {
      identifier
      title
      description
      userRequired
      opensAt
      closesAt
      totalVotes
      allowComments
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
  try {
    yield put(startLoading());
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
    yield put(setPoll(newPoll));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(endLoading());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* pollData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_AND_GOTO_POLL, getPoll);
}
