/*
 * HomePolls / Polls Messages
 *
 * This contains all the text for the HomePolls / Polls container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePolls.Polls';

export default defineMessages({
  pollsTitle: {
    id: `${scope}.pollsTitle`,
    defaultMessage: 'Polls',
  },
  buttonPollCreate: {
    id: `${scope}.buttonPollCreate`,
    defaultMessage: 'Create Poll',
  },
});
