import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import apolloClient from 'apolloClient';
import BlockTitle from 'components/BlockTitle';
import UnsavedChanges from 'components/UnsavedChanges';
import Movie from 'containers/Movie';
import Breadcrumbs from 'components/Breadcrumbs';
import Breadcrumb from 'components/Breadcrumb';
import FilmSVG from 'svgs/Film';
import HouseSVG from 'svgs/House';
import PollSVG from 'svgs/Poll';
import {
  loadAndGotoMovie,
  loadAndGotoPoll,
  loadAndGotoPolls,
  movieSet,
  movieModify,
} from 'containers/HomePage/actions';

import { makeSelectHomePageMovie } from 'containers/HomePage/selectors';
import Trailers from './Trailers';
import messages from './messages';
import Section from './styles/Section';
import DeleteMovie from './DeleteMovie';

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

const MOVIE_DELETE = gql`
  mutation($identifier: String!) {
    deleteMovie(identifier: $identifier)
  }
`;

const Modify = props => {
  const [movieChange, setMovieChange] = useState(props.movie);
  const { movie } = props;

  useEffect(() => {
    const { identifier } = props.match.params;
    if (props.movie && props.movie.identifier === identifier) {
      return;
    }

    props.loadAndGotoMovie(identifier);
  }, []);

  useEffect(() => {
    setMovieChange(props.movie);
  }, [props.movie]);

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
        props.movieModify(res.data.updateMovie);
      })
      .catch();
  };

  const handleDelete = () => {
    apolloClient
      .mutate({
        mutation: MOVIE_DELETE,
        variables: { identifier: movie.identifier },
      })
      .then(goToPoll)
      .catch();
  };

  const goToPoll = () => {
    props.loadAndGotoPoll(movie.poll.identifier);
  };

  const goToHomePolls = () => {
    props.loadAndGotoPolls();
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

  if (!movie || !movieChange) {
    return 'movie does not exist';
  }

  return (
    <>
      <Breadcrumbs>
        <Breadcrumb onClick={goToHomePolls} icon={<HouseSVG />}>
          Polls
        </Breadcrumb>
        <Breadcrumb onClick={goToPoll} icon={<PollSVG />}>
          {movie.poll.title}
        </Breadcrumb>
        <Breadcrumb disabled icon={<FilmSVG />}>
          {movie.title}
        </Breadcrumb>
      </Breadcrumbs>
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

      <Section>
        <BlockTitle title={props.intl.formatMessage(messages.deleteMovie)} />
        <DeleteMovie onDelete={handleDelete} />
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
  movieModify: PropTypes.func.isRequired,
  loadAndGotoPoll: PropTypes.func.isRequired,
  loadAndGotoMovie: PropTypes.func.isRequired,
  loadAndGotoPolls: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  movie: makeSelectHomePageMovie(),
});

const mapDispatchToProps = dispatch => ({
  movieSet: poll => dispatch(movieSet(poll)),
  movieModify: evt => dispatch(movieModify(evt)),
  loadAndGotoPoll: evt => dispatch(loadAndGotoPoll(evt)),
  loadAndGotoMovie: evt => dispatch(loadAndGotoMovie(evt)),
  loadAndGotoPolls: () => dispatch(loadAndGotoPolls()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRouter, injectIntl, withConnect)(Modify);
