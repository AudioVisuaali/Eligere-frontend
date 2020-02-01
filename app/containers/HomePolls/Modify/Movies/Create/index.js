import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { makeSelectHomePagePoll } from 'containers/HomePage/selectors';
import apolloClient from 'apolloClient';
import Movie from 'containers/Movie';
import Modal from 'components/Modal';
import history from 'utils/history';
import { generatePathHomePoll } from 'utils/paths';

import messages from './messages';

const MOVIE_CREATE = gql`
  mutation(
    $pollIdentifier: String!
    $title: String!
    $thumbnail: String!
    $description: String!
    $released: String!
    $duration: Int!
    $genres: [ID!]!
    $trailers: [String!]!
    $imdb: Int!
    $rottenTomatoes: Int!
    $metacritic: Int!
    $googleUsers: Int!
  ) {
    createMovie(
      pollIdentifier: $pollIdentifier
      movie: {
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
      }
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

const Create = props => {
  const [movie, setMovie] = useState(null);

  const handleCreate = () => {
    const newMovie = {
      pollIdentifier: props.poll.identifier, // props.poll.identifier,
      thumbnail: '',
      trailers: [],
      ...movie,
      ...movie.ratings,
    };

    apolloClient
      .mutate({
        mutation: MOVIE_CREATE,
        variables: newMovie,
      })
      .then(res => {
        props.movieAdd(res.data.createMovie);
        goToPoll();
      });
  };

  const goToPoll = () => {
    history.push(generatePathHomePoll(props.poll));
  };

  return (
    <Modal
      title={props.intl.formatMessage(messages.createMovie)}
      onClose={goToPoll}
      onAccept={handleCreate}
    >
      <Movie onChange={setMovie} />
    </Modal>
  );
};

Create.propTypes = {
  poll: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  movieAdd: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  poll: makeSelectHomePagePoll(),
});

const withConnect = connect(mapStateToProps);

export default compose(injectIntl, withConnect)(Create);
