/*
 * Login Messages
 *
 * This contains all the text for the Login container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Login';

export default defineMessages({
  register: {
    id: `${scope}.register`,
    defaultMessage: "Don't have an account? Register here!",
  },
  username: {
    id: `${scope}.username`,
    defaultMessage: 'Username',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Login',
  },
});
