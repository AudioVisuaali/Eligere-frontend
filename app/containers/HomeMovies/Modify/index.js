import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import apolloClient from 'apolloClient';
import BlockTitle from 'components/BlockTitle';
import UnsavedChanges from 'components/UnsavedChanges';
import Movie from 'containers/Movie';

import { makeSelectHomeMovie } from './selectors';
import { movieSet, movieUpdate } from './actions';
import reducer, { key } from './reducer';
import Trailers from './Trailers';
import messages from './messages';
import Section from './styles/Section';

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
    $released: Int!
    $duration: Int!
    $imdb: Int!
    $rottenTomatoes: Int!
    $metacritic: Int!
    $googleUsers: Int!
    $genres: [ID!]!
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
  const [movieChange, setMovieChange] = useState(null);
  const { movie } = props;

  useEffect(() => setMovieChange(movie), [movie]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const { identifier } = props.match.params;

    apolloClient
      .query({
        query: MOVIE_GET,
        variables: { identifier },
      })
      .then(res => {
        props.movieSet(res.data.movie);
      })
      .catch(console.log)
      .finally(() => setLoaded(true));
  }, []);

  const handleReset = () => {
    setMovieChange(movie);
  };

  const handleSave = () => {
    const { identifier } = props.match.params;

    const newMovie = {
      ...movieChange,
      ...movieChange.ratings,
      genres: movieChange.genres.map(genre => genre.id),
      identifier,
      thumbnail: '',
    };

    apolloClient
      .mutate({
        mutation: MOVIE_MODIFY,
        variables: newMovie,
      })
      .then(res => {
        props.movieSet(res.data.updateMovie);
      })
      .catch();
  };

  const isUnsavedChanges = () => {
    if (movie.title !== movieChange.title) return true;
    if (movie.duration !== movieChange.duration) return true;
    if (movie.description !== movieChange.description) return true;
    if (movie.released !== movieChange.released) return true;

    const { ratings } = movieChange;
    if (movie.ratings.imdb !== ratings.imdb) return true;
    if (movie.ratings.rottenTomatoes !== ratings.rottenTomatoes) return true;
    if (movie.ratings.metacritic !== ratings.metacritic) return true;
    if (movie.ratings.googleUsers !== ratings.googleUsers) return true;

    return false;
  };

  if (!loaded) {
    return null;
  }

  if (!movie) {
    return 'movie does not exist';
  }

  return (
    <>
      <Section>
        <BlockTitle title={props.intl.formatMessage(messages.modifyMovie)} />
        <Movie movie={movieChange} onChange={setMovieChange} />
      </Section>
      {isUnsavedChanges() && (
        <UnsavedChanges onSave={handleSave} onReset={handleReset} />
      )}

      <Section>
        <Trailers movie={movie} />
      </Section>
    </>
  );
};

Modify.propTypes = {
  intl: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      identifier: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  movie: PropTypes.object,
  movieSet: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  movie: makeSelectHomeMovie(),
});

const mapDispatchToProps = dispatch => ({
  movieSet: poll => dispatch(movieSet(poll)),
  movieUpdate: evt => dispatch(movieUpdate(evt)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  injectReducer({ reducer, key }),
  withRouter,
  injectIntl,
  withConnect,
)(Modify);
