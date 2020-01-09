/*
 * HomePolls / Community Messages
 *
 * This contains all the text for the HomePolls / Community container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePolls.Community';

export default defineMessages({
  titleCreate: {
    id: `${scope}.titleCreate`,
    defaultMessage: 'Create Poll',
  },
  titleModify: {
    id: `${scope}.titleModify`,
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
