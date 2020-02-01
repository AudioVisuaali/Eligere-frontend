import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { makeSelectHomePagePoll } from 'containers/HomePage/selectors';
import apolloClient from 'apolloClient';
import TextField from 'components/TextField';
import Modal from 'components/Modal';
import LoadingBox from 'components/LoadingBox';
import history from 'utils/history';
import SpinnerThird from 'svgs/SpinnerThird';
import { generatePathHomePoll } from 'utils/paths';
import debounce from 'utils/debounce';
import SearchResults from './styles/SearchResults';
import LoadingIcon from './styles/LoadingIcon';
import LoadingIconContainer from './styles/LoadingIconContainer';

import ImdbCard from './ImdbCard';
import messages from './messages';

const MOVIE_SEARCH_MAX = 5;

const MOVIE_SEARCH = gql`
  query($query: String!, $max: Int) {
    imdb(query: $query, max: $max) {
      id
      title
      year
      image
      stars
    }
  }
`;

const MOVIE_CREATE_IMDB = gql`
  mutation($pollIdentifier: String!, $id: ID!) {
    createMovieImdb(pollIdentifier: $pollIdentifier, id: $id) {
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
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [results, setResults] = useState(null);

  const goToPoll = () => {
    history.push(generatePathHomePoll(props.poll));
  };

  const onResultsSuccess = useCallback(
    res => {
      setLoading(false);
      setResults(res.data.imdb);
    },
    [query],
  );

  const getMovies = useCallback(
    debounce(queryVal => {
      apolloClient
        .query({
          query: MOVIE_SEARCH,
          variables: { query: queryVal, max: MOVIE_SEARCH_MAX },
        })
        .then(onResultsSuccess)
        .catch(() => {
          setResults(null);
          setLoading(false);
        });
    }, 300),
    [],
  );

  const createMovie = movieImdb => {
    if (creating) {
      return;
    }

    setCreating(true);
    apolloClient
      .mutate({
        mutation: MOVIE_CREATE_IMDB,
        variables: {
          pollIdentifier: props.match.params.identifier,
          id: movieImdb.id,
        },
      })
      .then(() => {
        goToPoll();
      })
      .catch(console.log)
      .finally(() => setCreating(false));
  };

  const handleSearch = e => {
    const { value } = e.target;
    setQuery(value);

    if (!value) {
      setResults(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    getMovies(value);
  };

  return (
    <Modal
      maxWidth={500}
      title={props.intl.formatMessage(messages.createMovie)}
      onClose={goToPoll}
      hideAccept
    >
      <LoadingIconContainer>
        <LoadingIcon>{(loading || creating) && <SpinnerThird />}</LoadingIcon>
      </LoadingIconContainer>
      <TextField
        focusOnMount
        disabled={creating}
        title="Search movie"
        value={query}
        onChange={handleSearch}
      />
      <SearchResults>
        {loading &&
          Array.from({ length: MOVIE_SEARCH_MAX }, (_, k) => (
            <LoadingBox
              key={k}
              style={{ height: 44, width: '100%', marginBottom: 10 }}
            />
          ))}
        {!loading &&
          results &&
          results.map(imdb => (
            <ImdbCard
              disabled={creating}
              onClick={createMovie}
              key={imdb.id}
              imdb={imdb}
            />
          ))}
      </SearchResults>
    </Modal>
  );
};

Create.propTypes = {
  poll: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      identifier: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  poll: makeSelectHomePagePoll(),
});

const mapDispatchToProps = dispatch => ({
  movieAdd: movie => dispatch(movieAdd(movie)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(injectIntl, withConnect)(Create);
