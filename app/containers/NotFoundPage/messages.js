/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.NotFoundPage';

export default defineMessages({
  description: {
    id: `${scope}.description`,
    defaultMessage: `We're sorry, the page you requested could not be found. Please go back to the homepage.`,
  },
  goHome: {
    id: `${scope}.goHome`,
    defaultMessage: `Go home`,
  },
});
