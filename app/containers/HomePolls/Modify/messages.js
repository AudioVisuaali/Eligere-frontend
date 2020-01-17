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
    id: `${scope}.cancel`,
    defaultMessage: 'Save changes',
  },
  formPollMovies: {
    id: `${scope}.formPollMovies`,
    defaultMessage: 'Movies',
  },
});
