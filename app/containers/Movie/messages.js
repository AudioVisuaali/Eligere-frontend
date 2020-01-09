/*
 * HomePolls Messages
 *
 * This contains all the text for the HomePolls container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePolls.Poll.Movie';

export default defineMessages({
  movieTitle: {
    id: `${scope}.movieTitle`,
    defaultMessage: 'Title',
  },
  movieDescription: {
    id: `${scope}.movieDescription`,
    defaultMessage: 'Description',
  },

  rottenTomatoes: {
    id: `${scope}.rottenTomatoes`,
    defaultMessage: 'Rotten Tomatoes %',
  },
  metacritic: {
    id: `${scope}.metacritic`,
    defaultMessage: 'Metacritic %',
  },
  googleUsers: {
    id: `${scope}.googleUsers`,
    defaultMessage: 'Google Users  %',
  },
  imdb: {
    id: `${scope}.imdb`,
    defaultMessage: 'Imdb %',
  },
  duration: {
    id: `${scope}.duration`,
    defaultMessage: 'Duration',
  },
  releaseDate: {
    id: `${scope}.releaseDate`,
    defaultMessage: 'Release Date',
  },

  trailersTitle: {
    id: `${scope}.trailersTitle`,
    defaultMessage: 'Trailers',
  },
});
