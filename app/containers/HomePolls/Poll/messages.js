/*
 * HomePolls Messages
 *
 * This contains all the text for the HomePolls container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePolls.Poll';

export default defineMessages({
  pollCreate: {
    id: `${scope}.pollCreate`,
    defaultMessage: 'Create Poll',
  },
  pollModify: {
    id: `${scope}.pollModify`,
    defaultMessage: 'Modify Poll',
  },
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
    defaultMessage: 'Allow feenback',
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
  totalVotes: {
    id: `${scope}.totalVotes`,
    defaultMessage: 'Total votes',
  },
  community: {
    id: `${scope}.community`,
    defaultMessage: 'Community',
  },

  formPollMovies: {
    id: `${scope}.formPollMovies`,
    defaultMessage: 'Movies',
  },
  formPollMovieCreate: {
    id: `${scope}.formPollMovieCreate`,
    defaultMessage: 'Add Movie',
  },
  buttonCreate: {
    id: `${scope}.buttonCreate`,
    defaultMessage: 'Create',
  },
  buttonUpdate: {
    id: `${scope}.buttonUpdate`,
    defaultMessage: 'Update',
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'Cancel',
  },
});
