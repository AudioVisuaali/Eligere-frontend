/*
 * HomePolls / Community Messages
 *
 * This contains all the text for the HomePolls / Community container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePolls.Community';

export default defineMessages({
  formPollTitle: {
    id: `${scope}.formPollTitle`,
    defaultMessage: 'Title',
  },
  formPollDescription: {
    id: `${scope}.formPollDescription`,
    defaultMessage: 'Description',
  },
});
