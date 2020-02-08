/*
 *
 * UserPage actions
 *
 */

import {
  INITIAL_LOAD_USER,
  USER_LOGOUT,
  USER_PROFILE_UPDATE_NAME,
  LOGIN_SET_USER,
} from './constants';

export function handleInitialUserLoad(user = null) {
  return {
    type: INITIAL_LOAD_USER,
    user,
  };
}

export function handleLoginAction(user) {
  return {
    type: LOGIN_SET_USER,
    user,
  };
}

export function handleLogOutAction() {
  return { type: USER_LOGOUT };
}

export function handleProfileUpdateAction(profile) {
  return { type: USER_PROFILE_UPDATE_NAME, profile };
}
