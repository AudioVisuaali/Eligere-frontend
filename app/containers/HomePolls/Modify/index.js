/**
 *
 * HomePolls / Create
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { gql } from 'apollo-boost';
import { withRouter } from 'react-router';

import apolloClient from 'apolloClient';
import history from 'utils/history';
import {
  pathNotFound,
  pathHomePolls,
  pathHomePollMovieModify,
  pathHomePollMovieCreate,
  generatePathHomePollMovieCreate,
  pathHomePoll,
} from 'utils/paths';
import injectReducer from 'utils/injectReducer';
import Poll from 'containers/Poll';
import Movies from 'containers/Movies';
import BlockTitle from 'components/BlockTitle';

import messages from './messages';
import { setPoll, pollUpdate } from './actions';
import reducer, { key } from './reducer';
import { makeSelectHomePoll } from './selectors';
import MovieModify from './Movies/Modify';
import MovieCreate from './Movies/Create';
import CreateMovie from './styles/CreateMovie';

const POLL_GET = gql`
  query($identifier: String!) {
    poll(identifier: $identifier) {
      identifier
      title
      description
      userRequired
      opensAt
      closesAt
      totalVotes
      allowComments
      allowMovieSuggestions
      movies {
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
        }
        ratings {
          imdb
          rottenTomatoes
          metacritic
          googleUsers
        }
        createdAt
      }
      community {
        identifier
        title
      }
    }
  }
`;

const POLL_MODIFY = gql`
  mutation(
    $identifier: String!
    $title: String!
    $description: String!
    $opensAt: String
    $closesAt: String
    $totalVotes: Int!
    $userRequired: Boolean!
    $allowComments: Boolean!
    $allowMovieSuggestions: Boolean!
  ) {
    updatePoll(
      identifier: $identifier
      title: $title
      description: $description
      opensAt: $opensAt
      closesAt: $closesAt
      totalVotes: $totalVotes
      userRequired: $userRequired
      allowComments: $allowComments
      allowMovieSuggestions: $allowMovieSuggestions
    ) {
      identifier
      title
      description
      userRequired
      opensAt
      closesAt
      totalVotes
      userRequired
      allowComments
      allowMovieSuggestions
    }
  }
`;

const Modify = props => {
  const { poll, intl } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { identifier } = props.match.params;
    apolloClient
      .query({ query: POLL_GET, variables: { identifier } })
      .then(res => {
        props.setPoll(res.data.poll);
      })
      .catch();
  }, []);

  const handleUpdate = modifiedPoll => {
    const { identifier } = props.match.params;
    setLoading(true);
    apolloClient
      .mutate({
        mutation: POLL_MODIFY,
        variables: { ...modifiedPoll, identifier },
      })
      .then(res => {
        props.pollUpdate(res.data.updatePoll);
      })
      .catch()
      .finally(() => setLoading(false));
  };

  const handleCancel = () => {
    history.push(pathHomePolls);
  };

  const goToCreateMovie = () => {
    history.push(generatePathHomePollMovieCreate(poll));
  };

  if (!poll) {
    return null;
  }

  return (
    <>
      <Poll
        poll={poll}
        onSave={handleUpdate}
        onCancel={handleCancel}
        loading={loading}
      />

      {poll && (
        <>
          <BlockTitle title={intl.formatMessage(messages.formPollMovies)} />
          <Movies poll={poll} />
          <CreateMovie
            onClick={goToCreateMovie}
            href={generatePathHomePollMovieCreate(poll)}
          >
            <FormattedMessage {...messages.formPollMovieCreate} />
          </CreateMovie>
        </>
      )}

      <Switch>
        <Route exact path={pathHomePoll} />
        <Route path={pathHomePollMovieCreate} component={MovieCreate} exact />
        <Route path={pathHomePollMovieModify} component={MovieModify} />
        <Redirect to={pathNotFound} />
      </Switch>
    </>
  );
};

Modify.propTypes = {
  pollUpdate: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      identifier: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  poll: PropTypes.object,
  setPoll: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  poll: makeSelectHomePoll(),
});

const mapDispatchToProps = dispatch => ({
  setPoll: poll => dispatch(setPoll(poll)),
  pollUpdate: evt => dispatch(pollUpdate(evt)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  injectReducer({ reducer, key }),
  withConnect,
  withRouter,
  injectIntl,
)(Modify);
