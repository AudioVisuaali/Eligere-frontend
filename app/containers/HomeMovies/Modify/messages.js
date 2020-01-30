/*
 * HomePolls Messages
 *
 * This contains all the text for the HomePolls container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePolls.Poll';

export default defineMessages({
  modifyMovie: {
    id: `${scope}.modifyMovie`,
    defaultMessage: 'Modify Movie',
  },
  deleteMovie: {
    id: `${scope}.deleteMovie`,
    defaultMessage: 'Delete Movie',
  },
  confirmation: {
    id: `${scope}.confirmation`,
    defaultMessage: 'Confirmation',
  },
  confirmDescription: {
    id: `${scope}.confirmDescription`,
    defaultMessage:
      "This action can't be undone. All the attached trailers will be deleted.",
  },
  confirm: {
    id: `${scope}.confirm`,
    defaultMessage: 'Confirm',
  },
});
