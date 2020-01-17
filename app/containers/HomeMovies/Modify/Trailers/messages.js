/*
 * HomePolls Messages
 *
 * This contains all the text for the HomePolls container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePolls.Poll';

export default defineMessages({
  trailers: {
    id: `${scope}.trailers`,
    defaultMessage: 'Trailers',
  },
  modifyTrailer: {
    id: `${scope}.modifyTrailer`,
    defaultMessage: 'Modify Trailer',
  },
  buttonTrailerCreate: {
    id: `${scope}.buttonTrailerCreate`,
    defaultMessage: 'Create Trailer',
  },
});
