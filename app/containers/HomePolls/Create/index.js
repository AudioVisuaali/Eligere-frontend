/**
 *
 * HomePolls / Create
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { gql } from 'apollo-boost';

import apolloClient from 'apolloClient';
import { addPoll } from 'containers/App/actions';
import Poll from 'containers/Poll';
import history from 'utils/history';
import { pathHomePolls, generatePathHomePoll } from 'utils/paths';

const POLL_CREATE = gql`
  mutation(
    $title: String!
    $description: String!
    $userRequired: Boolean!
    $opensAt: String!
    $closesAt: String!
    $community: String!
  ) {
    createPoll(
      title: $title
      description: $description
      userRequired: $userRequired
      opensAt: $opensAt
      closesAt: $closesAt
      community: $community
    ) {
      identifier
      title
      description
      userRequired
      createdAt
      opensAt
      closesAt
      community {
        identifier
        title
      }
    }
  }
`;

const Create = props => {
  const [loading, setLoading] = useState(false);
  const handleCreate = newPoll => {
    setLoading(true);
    apolloClient
      .query({ query: POLL_CREATE, variables: newPoll })
      .then(res => {
        const { createPoll } = res.data;
        props.addPoll(createPoll);
        history.push(generatePathHomePoll(createPoll));
      })
      .catch()
      .finally(() => setLoading(false));
  };

  const handleCancel = () => {
    history.push(pathHomePolls);
  };

  return (
    <Poll onCreate={handleCreate} onCancel={handleCancel} loading={loading} />
  );
};

Create.propTypes = {
  addPoll: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addPoll: poll => dispatch(addPoll(poll)),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Create);
