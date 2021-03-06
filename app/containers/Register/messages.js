/*
 * Login Messages
 *
 * This contains all the text for the Login container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Register';

export default defineMessages({
  register: {
    id: `${scope}.register`,
    defaultMessage: 'Register',
  },
  username: {
    id: `${scope}.username`,
    defaultMessage: 'Username',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  passwordAgain: {
    id: `${scope}.passwordAgain`,
    defaultMessage: 'Password again',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'Already have an account? Login here!',
  },
});
