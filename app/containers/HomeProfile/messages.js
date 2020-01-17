/*
 * HomeProfile Messages
 *
 * This contains all the text for the HomeProfile container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomeProfile';

export default defineMessages({
  profileTitle: {
    id: `${scope}.profileTitle`,
    defaultMessage: 'Profile',
  },
  profileDisplayName: {
    id: `${scope}.profileDisplayName`,
    defaultMessage: 'Display name',
  },
  update: {
    id: `${scope}.update`,
    defaultMessage: 'Update',
  },
  profilePassword: {
    id: `${scope}.profilePassword`,
    defaultMessage: 'Password',
  },
  oldPassword: {
    id: `${scope}.oldPassword`,
    defaultMessage: 'Password',
  },
  newPassword: {
    id: `${scope}.newPassword`,
    defaultMessage: 'New password',
  },
  newPasswordAgain: {
    id: `${scope}.newPasswordAgain`,
    defaultMessage: 'Password again',
  },
  profileSessions: {
    id: `${scope}.profileSessions`,
    defaultMessage: 'Sessions',
  },
  changeLanguage: {
    id: `${scope}.changeLanguage`,
    defaultMessage: 'Change languageg',
  },
});
