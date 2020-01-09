/*
 * ThemeSwitch Messages
 *
 * This contains all the text for the ThemeSwitch component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.ThemeSwitch';

export default defineMessages({
  light: {
    id: `${scope}.light`,
    defaultMessage: 'Light',
  },
  dark: {
    id: `${scope}.dark`,
    defaultMessage: 'Dark',
  },
});
