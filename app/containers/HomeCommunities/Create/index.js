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
import { addCommunity } from 'containers/App/actions';
import history from 'utils/history';
import { pathHomeCommunities } from 'utils/paths';

import Community from '../Community';

const COMMUNITY_CREATE = gql`
  mutation($title: String!, $description: String!) {
    createCommunity(title: $title, description: $description) {
      identifier
      title
      description
      createdAt
    }
  }
`;

const Create = props => {
  const [loading, setLoading] = useState(false);

  const handleCreate = community => {
    setLoading(true);
    apolloClient
      .query({ query: COMMUNITY_CREATE, variables: community })
      .then(res => {
        props.addCommunity(res.data.createCommunity);
        history.push(pathHomeCommunities);
      })
      .catch()
      .finally(() => setLoading(false));
  };

  const handleCancel = () => {
    history.push(pathHomeCommunities);
  };

  return (
    <Community
      onCreate={handleCreate}
      onCancel={handleCancel}
      loading={loading}
    />
  );
};

Create.propTypes = {
  addCommunity: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addCommunity: poll => dispatch(addCommunity(poll)),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Create);
