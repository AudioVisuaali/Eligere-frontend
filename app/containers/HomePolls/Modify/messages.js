/*
 * HomePolls Messages
 *
 * This contains all the text for the HomePolls container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePolls.Modify';

export default defineMessages({
  pollModify: {
    id: `${scope}.pollModify`,
    defaultMessage: 'Modify Poll',
  },
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'Cancel',
  },
  saveChanges: {
    id: `${scope}.saveChanges`,
    defaultMessage: 'Save changes',
  },
  formPollMovies: {
    id: `${scope}.formPollMovies`,
    defaultMessage: 'Movies',
  },
  deletePoll: {
    id: `${scope}.deletePoll`,
    defaultMessage: 'Delete Poll',
  },
  confirmation: {
    id: `${scope}.confirmation`,
    defaultMessage: 'Confirmation',
  },
  confirmDescription: {
    id: `${scope}.confirmDescription`,
    defaultMessage:
      "This action can't be undone. All the attached movies and trailers will be deleted.",
  },
  confirm: {
    id: `${scope}.confirm`,
    defaultMessage: 'Confirm',
  },
  pollDeletionDescription: {
    id: `${scope}.pollDeletionDescription`,
    defaultMessage:
      "Deleting poll will delete all the movies alongside all thetrailers. This action can't be undone!",
  },
});
