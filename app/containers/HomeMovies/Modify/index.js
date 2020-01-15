import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import apolloClient from 'apolloClient';
import BlockTitle from 'components/BlockTitle';
import Movie from 'containers/Movie';
import history from 'utils/history';
import { generatePathHomePoll } from 'utils/paths';
import Trailers from './Trailers';
import messages from './messages';

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
        thumbnailURL
        title
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
        title
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
  const [movie, setMovie] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log(props.match.params);
    const { identifier } = props.match.params;

    apolloClient
      .query({
        query: MOVIE_GET,
        variables: { identifier },
      })
      .then(res => setMovie(res.data.movie))
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

    apolloClient
      .mutate({
        mutation: MOVIE_MODIFY,
        variables: newMovie,
      })
      .then(res => {
        props.movieModify(res.data.updateMovie);
        goToPoll();
      })
      .catch();
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
    <>
      <BlockTitle title={props.intl.formatMessage(messages.modifyMovie)} />
      <Movie movie={movie} onChange={console.log} />

      <Trailers movie={movie} />
    </>
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
  movieModify: PropTypes.func.isRequired,
};

export default compose(
  withRouter,
  injectIntl,
)(Modify);
