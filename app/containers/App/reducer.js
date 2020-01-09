/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  INITIAL_LOAD_USER,
  USER_LOGOUT,
  USER_UPDATE_DISPLAY_NAME,
  LOGIN_SET_USER,
  COMMUNITY_ADD,
  COMMUNITY_UPDATE,
  POLL_ADD,
  POLL_UPDATE,
} from './constants';

// The initial state of the App
export const initialState = {
  user: null,
  userLoaded: false,
  polls: null,
  communities: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case USER_UPDATE_DISPLAY_NAME:
        draft.user.displayName = action.displayName;
        break;

      case USER_LOGOUT:
        draft.user = null;
        draft.polls = null;
        draft.communities = null;
        break;

      case INITIAL_LOAD_USER:
        draft.userLoaded = true;
        draft.user = action.user;
        draft.polls = action.polls;
        draft.communities = action.communities;
        break;

      case LOGIN_SET_USER:
        draft.user = action.user;
        draft.polls = action.polls;
        draft.communities = action.communities;
        break;

      case COMMUNITY_ADD:
        draft.communities = [action.community, ...state.communities];
        break;

      case COMMUNITY_UPDATE:
        draft.communities = state.communities.map(c =>
          c.identifier === action.community.identifier ? action.community : c,
        );
        break;

      case POLL_ADD:
        draft.polls = [action.poll, ...state.polls];
        break;

      case POLL_UPDATE:
        draft.polls = state.polls.map(p =>
          p.identifier === action.poll.identifier ? action.poll : p,
        );
    }
  });

export default appReducer;
