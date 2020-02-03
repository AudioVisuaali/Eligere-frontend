/*
 *
 * ThemeProvider actions
 *
 */

import {
  POLLS_SET,
  COMMUNITIES_SET,
  POLL_SET,
  POLL_MODIFY,
  MOVIE_SET,
  MOVIE_MODIFY,
  TRAILER_ADD,
  TRAILER_MODIFY,
  TRAILER_REMOVE,
  COMMUNITY_SET,
  COMMUNITY_MODIFY,
  COMMUNITY_REMOVE,
  LOAD_AND_GOTO_POLL,
  LOAD_AND_GOTO_MOVIE,
  LOAD_AND_GOTO_POLLS,
  LOAD_AND_GOTO_COMMUNITIES,
  LOAD_AND_GOTO_COMMUNITY,
  LOAD_AND_GOTO_PROFILE,
} from './constants';

export function pollsSet(polls) {
  return {
    type: POLLS_SET,
    polls,
  };
}

export function communitiesSet(communities) {
  return {
    type: COMMUNITIES_SET,
    communities,
  };
}

export function pollSet(poll) {
  return {
    type: POLL_SET,
    poll,
  };
}

export function pollModify(poll) {
  return {
    type: POLL_MODIFY,
    poll,
  };
}

export function movieSet(movie) {
  return {
    type: MOVIE_SET,
    movie,
  };
}

export function movieModify(movie) {
  return {
    type: MOVIE_MODIFY,
    movie,
  };
}

export function trailerAdd(trailer) {
  return {
    type: TRAILER_ADD,
    trailer,
  };
}

export function trailerModify(trailer) {
  return {
    type: TRAILER_MODIFY,
    trailer,
  };
}

export function trailerRemove(trailer) {
  return {
    type: TRAILER_REMOVE,
    trailer,
  };
}

export function communitySet(community) {
  return {
    type: COMMUNITY_SET,
    community,
  };
}

export function communityModify(community) {
  return {
    type: COMMUNITY_MODIFY,
    community,
  };
}

export function communityRemove() {
  return {
    type: COMMUNITY_REMOVE,
  };
}

export function loadAndGotoPoll(identifier, showLoadingBar = true) {
  return {
    type: LOAD_AND_GOTO_POLL,
    identifier,
    showLoadingBar,
  };
}

export function loadAndGotoMovie(identifier, showLoadingBar = true) {
  return {
    type: LOAD_AND_GOTO_MOVIE,
    identifier,
    showLoadingBar,
  };
}

export function loadAndGotoPolls(showLoadingBar = true) {
  return {
    type: LOAD_AND_GOTO_POLLS,
    showLoadingBar,
  };
}

export function loadAndGotoCommunities(showLoadingBar = true) {
  return {
    type: LOAD_AND_GOTO_COMMUNITIES,
    showLoadingBar,
  };
}

export function loadAndGotoCommunity(showLoadingBar = true) {
  return {
    type: LOAD_AND_GOTO_COMMUNITY,
    showLoadingBar,
  };
}

export function loadAndGotoProfile(showLoadingBar = true) {
  return {
    type: LOAD_AND_GOTO_PROFILE,
    showLoadingBar,
  };
}
