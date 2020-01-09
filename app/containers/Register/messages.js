/*
 * Login Messages
 *
 * This contains all the text for the Login container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Login';

export default defineMessages({
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Already have an account? Login here!',
  },
  username: {
    id: `${scope}.username`,
    defaultMessage: 'Username',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  register: {
    id: `${scope}.register`,
    defaultMessage: 'Register',
  },
});
