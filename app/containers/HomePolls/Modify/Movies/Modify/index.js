import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import apolloClient from 'apolloClient';
import {
  makeSelectHomePoll,
  makeSelectHomePollMovie,
} from 'containers/HomePolls/Modify/selectors';
import Modal from 'components/Modal';
import Movie from 'containers/Movie';
import Trailers from 'containers/Trailers';
import history from 'utils/history';
import { movieModify } from 'containers/HomePolls/Modify/actions';
import {
  generatePathHomePoll,
  pathHomePollMovieModify,
  pathHomePollMovieTrailerCreate,
  pathHomePollMovieTrailerModify,
  pathNotFound,
} from 'utils/paths';
import TrailerCreate from './Trailer/Create';
import TrailerModify from './Trailer/Modify';
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
  const { movie } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const { movieIdentifier } = props.match.params;
    apolloClient
      .query({
        query: MOVIE_GET,
        variables: { identifier: movieIdentifier },
      })
      .then(res => props.movieModify(res.data.movie))
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

  if (!movie.trailers) {
    return null;
  }

  return (
    <>
      <Modal
        title={props.intl.formatMessage(messages.modifyMovie)}
        onClose={goToPoll}
        onAccept={handleSave}
      >
        <Movie movie={movie} onChange={console.log} />
        <Trailers trailers={movie.trailers} />
      </Modal>
      <Switch>
        <Route exact path={pathHomePollMovieModify} />
        <Route
          path={pathHomePollMovieTrailerCreate}
          component={TrailerCreate}
          exact
        />
        <Route
          path={pathHomePollMovieTrailerModify}
          component={TrailerModify}
          exact
        />
        <Redirect to={pathNotFound} />
      </Switch>
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
  movie: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  poll: makeSelectHomePoll(),
  movie: makeSelectHomePollMovie(),
});

const mapDispatchToProps = dispatch => ({
  movieModify: movie => dispatch(movieModify(movie)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, withConnect, injectIntl)(Modify);
