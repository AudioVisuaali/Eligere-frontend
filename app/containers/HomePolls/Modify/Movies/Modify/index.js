import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router';

import apolloClient from 'apolloClient';
import Modal from 'components/Modal';
import Movie from 'containers/Movie';
import history from 'utils/history';
import { generatePathHomePoll } from 'utils/paths';
import messages from '../../../messages';

const MOVIE_GET = gql`
  query($identifier: String!) {
    movie(identifier: $identifier) {
      identifier
      title
      thumbnail
      description
      released
      duration
      genres {
        id
        value
      }
      trailers {
        identifier
        platform
        url
        slug
      }
      ratings {
        imdb
        rottenTomatoes
        metacritic
        googleUsers
      }
      createdAt
    }
  }
`;

const MOVIE_MODIFY = gql`
  mutation(
    $identifier: String!
    $title: String!
    $thumbnail: String!
    $description: String!
    $released: String!
    $duration: Int!
    $imdb: Int!
    $rottenTomatoes: Int!
    $metacritic: Int!
    $googleUsers: Int!
    $genres: [ID!]!
    $trailers: [String!]!
  ) {
    updateMovie(
      identifier: $identifier
      title: $title
      thumbnail: $thumbnail
      description: $description
      released: $released
      duration: $duration
      ratings: {
        imdb: $imdb
        rottenTomatoes: $rottenTomatoes
        metacritic: $metacritic
        googleUsers: $googleUsers
      }
      genres: $genres
      trailers: $trailers
    ) {
      identifier
      title
      thumbnail
      description
      released
      duration
      genres {
        id
        value
      }
      trailers {
        identifier
        platform
        url
        slug
      }
      ratings {
        imdb
        rottenTomatoes
        metacritic
        googleUsers
      }
      createdAt
    }
  }
`;

const Modify = props => {
  const [loaded, setLoaded] = useState(false);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const { movieIdentifier } = props.match.params;
    apolloClient
      .query({
        query: MOVIE_GET,
        variables: { identifier: movieIdentifier },
      })
      .then(res => {
        const { trailers, genres, ...rest } = res.data.movie;
        setMovie({
          ...rest,
          trailers: trailers.map(t => t.url),
          genres: genres.map(g => g.id),
        });
      })
      .catch(console.log)
      .finally(() => setLoaded(true));
  }, []);

  const handleSave = () => {
    const { movieIdentifier } = props.match.params;
    const newMovie = {
      ...movie,
      ...movie.ratings,
      identifier: movieIdentifier, // props.poll.identifier,
      thumbnail: '',
      trailers: movie.trailers.filter(t => t),
    };

    apolloClient.mutate({
      mutation: MOVIE_MODIFY,
      variables: newMovie,
    });
  };

  const goToPoll = () => {
    history.push(generatePathHomePoll(props.poll));
  };

  if (!loaded) {
    return null;
  }

  if (!movie) {
    return 'movie does not exist';
  }

  return (
    <Modal
      title={props.intl.formatMessage(messages.modifyMovie)}
      onClose={goToPoll}
      onAccept={handleSave}
    >
      <Movie movie={movie} onChange={setMovie} />
    </Modal>
  );
};

Modify.propTypes = {
  intl: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieIdentifier: PropTypes.string.isRequired,
      identifier: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  poll: PropTypes.object.isRequired,
};

export default injectIntl(withRouter(Modify));
