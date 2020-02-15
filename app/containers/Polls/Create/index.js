/**
 *
 * HomePolls / Create
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { gql } from 'apollo-boost';

import apolloClient from 'apolloClient';
import Poll, { defaultPoll } from 'containers/Poll';
import Modal from 'components/Modal';
import history from 'utils/history';
import { pathHomePolls, generatePathHomePoll } from 'utils/paths';

import messages from './messages';

const POLL_CREATE = gql`
  mutation(
    $title: String!
    $description: String!
    $requireUserForSuggesting: Boolean!
    $opensAt: String
    $closesAt: String
    $community: CommunityCreate
    $allowMovieSuggestions: Boolean!
    $totalVotes: Int!
    $voteDuplicationChecking: String!
  ) {
    createPoll(
      title: $title
      description: $description
      requireUserForSuggesting: $requireUserForSuggesting
      opensAt: $opensAt
      closesAt: $closesAt
      community: $community
      allowMovieSuggestions: $allowMovieSuggestions
      totalVotes: $totalVotes
      voteDuplicationChecking: $voteDuplicationChecking
    ) {
      identifier
      title
      description
      requireUserForSuggesting
      createdAt
      opensAt
      closesAt
      allowMovieSuggestions
      totalVotes
      voteDuplicationChecking
      community {
        identifier
        title
      }
    }
  }
`;

const Create = props => {
  const [creating, setCreating] = useState(false);
  const [poll, setPoll] = useState(defaultPoll);

  const handleCreate = () => {
    setCreating(true);
    apolloClient
      .query({
        query: POLL_CREATE,
        variables: {
          ...poll,
          opensAt: poll.opensAt ? new Date(poll.opensAt).toString() : null,
          closesAt: poll.closesAt ? new Date(poll.closesAt).toString() : null,
        },
      })
      .then(res => {
        const { createPoll } = res.data;
        // props.addPoll(res.data.createPoll);
        history.push(generatePathHomePoll(createPoll));
      })
      .catch()
      .finally(() => setCreating(false));
  };

  const handleCancel = () => {
    history.push(pathHomePolls);
  };

  return (
    <Modal
      title={props.intl.formatMessage(messages.createPoll)}
      disableAccept={creating}
      onAccept={handleCreate}
      acceptText={props.intl.formatMessage(messages.create)}
      onClose={handleCancel}
    >
      <Poll onChange={setPoll} poll={poll} />
    </Modal>
  );
};

Create.propTypes = {
  intl: PropTypes.object,
};

const mapDispatchToProps = () => ({});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, injectIntl)(Create);
