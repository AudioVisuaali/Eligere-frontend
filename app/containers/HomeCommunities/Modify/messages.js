/*
 * HomePolls / Communities Messages
 *
 * This contains all the text for the HomePolls / Communities container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ComeCommunities.Modify';

export default defineMessages({
  modifyCommunity: {
    id: `${scope}.modifyCommunity`,
    defaultMessage: 'Modify Community',
  },
  communityDeletionDescription: {
    id: `${scope}.communityDeletionDescription`,
    defaultMessage:
      "Deleting community will delete connections to polls. This action can't be undone!",
  },
  deleteCommunity: {
    id: `${scope}.deleteCommunity`,
    defaultMessage: 'Delete Community',
  },
  confirmation: {
    id: `${scope}.confirmation`,
    defaultMessage: 'Confirmation',
  },
  confirm: {
    id: `${scope}.confirm`,
    defaultMessage: 'Confirm',
  },
  confirmDescription: {
    id: `${scope}.confirmDescription`,
    defaultMessage:
      "Deleting community will delete connections to polls. This action can't be undone!",
  },
});
