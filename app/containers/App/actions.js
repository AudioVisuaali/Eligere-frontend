/*
 *
 * UserPage actions
 *
 */

import {
  INITIAL_LOAD_USER,
  USER_LOGOUT,
  USER_UPDATE_DISPLAY_NAME,
  LOGIN_SET_USER,
  COMMUNITY_ADD,
  COMMUNITY_UPDATE,
  POLL_ADD,
  POLL_UPDATE,
  POLL_DELETE,
} from './constants';

export function handleInitialUserLoad(
  user = null,
  polls = null,
  communities = null,
) {
  return {
    type: INITIAL_LOAD_USER,
    user,
    polls,
    communities,
  };
}

export function handleLoginAction(user, polls, communities) {
  return {
    type: LOGIN_SET_USER,
    user,
    polls,
    communities,
  };
}

export function handleLogOutAction() {
  return { type: USER_LOGOUT };
}

export function handleUsernameChangeAction(displayName) {
  return { type: USER_UPDATE_DISPLAY_NAME, displayName };
}

export function addCommunity(community) {
  return { type: COMMUNITY_ADD, community };
}

export function modifyCommunity(community) {
  return { type: COMMUNITY_UPDATE, community };
}

export function addPoll(poll) {
  return { type: POLL_ADD, poll };
}

export function modifyPoll(poll) {
  return { type: POLL_UPDATE, poll };
}

export function deletePoll(poll) {
  return { type: POLL_DELETE, poll };
}
