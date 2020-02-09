/*
 * History Messages
 *
 * This contains all the text for the History container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'ELEGIRE',
  },
  description: {
    id: `${scope}.displayNameLabel`,
    defaultMessage: 'Vote on movies as a collective',
  },
  codedWithLove: {
    id: `${scope}.codedWithLove`,
    defaultMessage: `This website is {coded} with 💖 in the night of the night`,
  },
});
