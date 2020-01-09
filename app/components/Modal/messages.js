/*
 * Chat Messages
 *
 * This contains all the text for the Chat container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.modal';

export default defineMessages({
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'Cancel',
  },
  save: {
    id: `${scope}.save`,
    defaultMessage: 'Save',
  },
});
