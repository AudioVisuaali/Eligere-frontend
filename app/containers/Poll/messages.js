/*
 * Poll Messages
 *
 * This contains all the text for the HomePolls container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Poll';

export default defineMessages({
  formPollTitle: {
    id: `${scope}.formPollTitle`,
    defaultMessage: 'Title',
  },
  formPollDescription: {
    id: `${scope}.formPollDescription`,
    defaultMessage: 'Description',
  },
  userIsRequiredToVote: {
    id: `${scope}.userIsRequiredToVote`,
    defaultMessage: 'Anonymous voting',
  },
  allowFeedBack: {
    id: `${scope}.allowFeedBack`,
    defaultMessage: 'Allow feedback',
  },
  allowMovieSuggestions: {
    id: `${scope}.allowMovieSuggestions`,
    defaultMessage: 'Allow movie suggestions',
  },
  pollOpensAt: {
    id: `${scope}.pollOpensAt`,
    defaultMessage: 'Voting opens at',
  },
  pollClosesAt: {
    id: `${scope}.pollClosesAt`,
    defaultMessage: 'Voting closes at',
  },
  community: {
    id: `${scope}.community`,
    defaultMessage: 'Community',
  },
  totalVotes: {
    id: `${scope}.totalVotes`,
    defaultMessage: 'Total votes',
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'Cancel',
  },
  createPoll: {
    id: `${scope}.createPoll`,
    defaultMessage: 'Create Poll',
  },
  saveChanges: {
    id: `${scope}.saveChanges`,
    defaultMessage: 'Save changes',
  },
  duplicationCheck: {
    id: `${scope}.duplicationCheck`,
    defaultMessage: 'Duplication checking',
  },
  IP: {
    id: `${scope}.IP`,
    defaultMessage: 'IP duplication checking',
  },
  COOKIE: {
    id: `${scope}.COOKIE`,
    defaultMessage: 'Browser cookie duplication checking',
  },
  USER: {
    id: `${scope}.USER`,
    defaultMessage: 'User duplication checking',
  },
});
