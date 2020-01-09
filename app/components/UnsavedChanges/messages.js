/*
 * UnsavedChanges Messages
 *
 * This contains all the text for the UnsavedChanges component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.UnsavedChanges';

export default defineMessages({
  unsavedChanges: {
    id: `${scope}.unsavedChanges`,
    defaultMessage: 'You have unsaved changes',
  },
  reset: {
    id: `${scope}.reset`,
    defaultMessage: 'Reset',
  },
  save: {
    id: `${scope}.save`,
    defaultMessage: 'Save Changes',
  },
});
