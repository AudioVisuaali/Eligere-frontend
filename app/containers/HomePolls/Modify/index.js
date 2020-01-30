/**
 *
 * HomePolls / Create
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { gql } from 'apollo-boost';
import { withRouter } from 'react-router';

import apolloClient from 'apolloClient';
import history from 'utils/history';
import {
  pathHomePollMovieCreate,
  generatePathHomePollMovieCreate,
  pathHomePoll,
  pathNotFound,
  pathHomePolls,
} from 'utils/paths';
import injectReducer from 'utils/injectReducer';
import Poll from 'containers/Poll';
import BlockTitle from 'components/BlockTitle';
import UnsavedChanges from 'components/UnsavedChanges';
import PreviewLinkVotePage from 'containers/PreviewLinks/VotePage';
import PreviewLinkPolls from 'containers/PreviewLinks/Polls';
import { deletePoll } from 'containers/App/actions';
import PlusSVG from 'svgs/Plus';
import { getISODate } from 'utils/time';

import messages from './messages';
import { setPoll, pollUpdate } from './actions';
import reducer, { key } from './reducer';
import { makeSelectHomePoll } from './selectors';
import MoviesContainer from './styles/MoviesContainer';
import MovieCreation from './styles/MovieCreation';
import Navigation from './styles/Navigation';
import CreateMovie from './CreateMovie';
import DeletePoll from './DeletePoll';
import Movie from './Movie';
import Section from './styles/Section';

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
      }
      community {
        identifier
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
    $community: CommunityCreate
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
      community: $community
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
      community {
        identifier
      }
    }
  }
`;

const DELETE_POLL = gql`
  mutation($identifier: String!) {
    deletePoll(identifier: $identifier)
  }
`;

const formatDate = dateStr => (dateStr ? new Date(dateStr).toString() : null);

const formatCommunity = community =>
  community ? { ...community, __typename: null } : null;

const Modify = props => {
  const { poll, intl } = props;
  const [modifiedPoll, setModifiedPoll] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { identifier } = props.match.params;
    apolloClient
      .query({ query: POLL_GET, variables: { identifier } })
      .then(res => {
        const localPoll = {
          ...res.data.poll,
          opensAt: getISODate(res.data.poll.opensAt),
          closesAt: getISODate(res.data.poll.closesAt),
        };
        props.setPoll(res.data.poll);
        setModifiedPoll(localPoll);
      })
      .catch();
  }, []);

  const handleUpdate = () => {
    const { identifier } = props.match.params;
    setLoading(true);
    apolloClient
      .mutate({
        mutation: POLL_MODIFY,
        variables: {
          ...modifiedPoll,
          identifier,
          opensAt: formatDate(modifiedPoll.opensAt),
          closesAt: formatDate(modifiedPoll.closesAt),
          community: formatCommunity(modifiedPoll.community),
        },
      })
      .then(res => {
        props.pollUpdate(res.data.updatePoll);
      })
      .catch()
      .finally(() => setLoading(false));
  };

  const handleDelete = () => {
    apolloClient
      .mutate({
        mutation: DELETE_POLL,
        variables: {
          identifier: poll.identifier,
        },
      })
      .then(() => {
        props.deletePoll(poll);
        history.push(pathHomePolls);
      })
      .catch();
  };

  const goToCreateMovie = () => {
    history.push(generatePathHomePollMovieCreate(poll));
  };

  const resetPoll = () => {
    setModifiedPoll(poll);
  };

  const isCommunityChanged = () => {
    if (!poll.community && !modifiedPoll.community) return false;

    if (poll.community && modifiedPoll.community) {
      if (poll.community.identifier === modifiedPoll.community.identifier) {
        return false;
      }
    }

    return true;
  };

  const isChange = () => {
    if (poll.title !== modifiedPoll.title) return true;
    if (poll.description !== modifiedPoll.description) return true;
    if (poll.userRequired !== modifiedPoll.userRequired) return true;
    if (poll.opensAt !== modifiedPoll.opensAt) return true;
    if (poll.closesAt !== modifiedPoll.closesAt) return true;
    if (poll.allowComments !== modifiedPoll.allowComments) return true;
    if (poll.totalVotes !== modifiedPoll.totalVotes) return true;
    if (poll.allowMovieSuggestions !== modifiedPoll.allowMovieSuggestions)
      return true;

    return isCommunityChanged();
  };

  if (!poll) {
    return null;
  }

  return (
    <>
      <Navigation>
        <PreviewLinkPolls />
        <PreviewLinkVotePage poll={poll} />
      </Navigation>

      <Section>
        <BlockTitle title={intl.formatMessage(messages.pollModify)} />
        <Poll poll={modifiedPoll} onChange={setModifiedPoll} />
      </Section>

      <Section>
        {modifiedPoll && (
          <>
            <BlockTitle title={intl.formatMessage(messages.formPollMovies)} />
            <MoviesContainer>
              <div>
                <MovieCreation
                  onClick={goToCreateMovie}
                  href={generatePathHomePollMovieCreate(poll)}
                >
                  <PlusSVG />
                </MovieCreation>
              </div>
              {poll.movies.map(movie => (
                <div>
                  <Movie key={movie.identifier} movie={movie} />
                </div>
              ))}
            </MoviesContainer>
            {isChange() && (
              <UnsavedChanges onReset={resetPoll} onSave={handleUpdate} />
            )}
          </>
        )}
      </Section>

      <Section>
        <BlockTitle title={intl.formatMessage(messages.deletePoll)} />
        <DeletePoll onDelete={handleDelete} />
      </Section>

      <Switch>
        <Route path={pathHomePoll} exact />
        <Route path={pathHomePollMovieCreate} component={CreateMovie} />
        <Redirect to={pathNotFound} />
      </Switch>
    </>
  );
};

Modify.propTypes = {
  pollUpdate: PropTypes.func.isRequired,
  deletePoll: PropTypes.func.isRequired,
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
  deletePoll: poll => dispatch(deletePoll(poll)),
  pollUpdate: evt => dispatch(pollUpdate(evt)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  injectReducer({ reducer, key }),
  withConnect,
  withRouter,
  injectIntl,
)(Modify);
