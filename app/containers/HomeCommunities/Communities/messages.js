/*
 * HomePolls / Communities Messages
 *
 * This contains all the text for the HomePolls / Communities container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePolls.Communities';

export default defineMessages({
  communities: {
    id: `${scope}.communities`,
    defaultMessage: 'Communities',
  },
  buttonCommunityCreate: {
    id: `${scope}.buttonCommunityCreate`,
    defaultMessage: 'Create community',
  },
});
