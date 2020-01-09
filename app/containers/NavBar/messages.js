/*
 * NavBar Messages
 *
 * This contains all the text for the NavBar container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.NavBar';

export default defineMessages({
  polls: {
    id: `${scope}.polls`,
    defaultMessage: 'Polls',
  },
  communities: {
    id: `${scope}.communities`,
    defaultMessage: 'Communities',
  },
  profile: {
    id: `${scope}.profile`,
    defaultMessage: 'Profile',
  },
});
