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
import Poll from 'containers/Poll';
import BlockTitle from 'components/BlockTitle';
import UnsavedChanges from 'components/UnsavedChanges';
import Breadcrumbs from 'components/Breadcrumbs';
import Breadcrumb from 'components/Breadcrumb';
import HouseSVG from 'svgs/House';
import PollSVG from 'svgs/Poll';
import PlusSVG from 'svgs/Plus';
import {
  loadAndGotoMovie,
  loadAndGotoPoll,
  loadAndGotoPolls,
  pollModify,
} from 'containers/HomePage/actions';
import { makeSelectHomePagePoll } from 'containers/HomePage/selectors';

import messages from './messages';
import MoviesContainer from './styles/MoviesContainer';
import MovieCreation from './styles/MovieCreation';
import CreateMovie from './CreateMovie';
import DeletePoll from './DeletePoll';
import Movie from './Movie';
import Section from './styles/Section';

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
  community ? { ...community, __typename: undefined } : null;

const Modify = props => {
  const { poll, intl } = props;
  const [modifiedPoll, setModifiedPoll] = useState(null);

  useEffect(() => {
    const { identifier } = props.match.params;
    if (props.poll && identifier === props.poll.identifier) {
      return;
    }

    props.loadAndGotoPoll(identifier, false);
  }, []);

  useEffect(() => {
    setModifiedPoll(props.poll);
  }, [props.poll]);

  const handleUpdate = () => {
    const { identifier } = props.match.params;
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
        props.pollModify(res.data.updatePoll);
      })
      .catch();
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
        // props.deletePoll(poll);
        history.push(pathHomePolls);
      })
      .catch();
  };

  const goToCreateMovie = () => {
    history.push(generatePathHomePollMovieCreate(poll));
  };

  const goToHomePolls = () => {
    props.loadAndGotoPolls();
  };

  const goToMovie = movie => {
    props.loadAndGotoMovie(movie.identifier);
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
      <Breadcrumbs>
        <Breadcrumb onClick={goToHomePolls} icon={<HouseSVG />}>
          Polls
        </Breadcrumb>
        <Breadcrumb disabled icon={<PollSVG />}>
          {poll.title}
        </Breadcrumb>
      </Breadcrumbs>

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
                <div key={movie.identifier}>
                  <Movie onClick={goToMovie} movie={movie} />
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
  pollModify: PropTypes.func.isRequired,
  // deletePoll: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      identifier: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  poll: PropTypes.object,
  intl: PropTypes.object.isRequired,
  loadAndGotoPoll: PropTypes.func.isRequired,
  loadAndGotoMovie: PropTypes.func.isRequired,
  loadAndGotoPolls: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  poll: makeSelectHomePagePoll(),
});

const mapDispatchToProps = dispatch => ({
  pollModify: evt => dispatch(pollModify(evt)),
  loadAndGotoPoll: (identifier, showLoadBar) =>
    dispatch(loadAndGotoPoll(identifier, showLoadBar)),
  loadAndGotoMovie: evt => dispatch(loadAndGotoMovie(evt)),
  loadAndGotoPolls: () => dispatch(loadAndGotoPolls()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withRouter, injectIntl)(Modify);
