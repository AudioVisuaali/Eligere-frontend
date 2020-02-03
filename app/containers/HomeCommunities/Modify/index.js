/**
 *
 * HomePolls / Create
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { gql } from 'apollo-boost';
import { withRouter } from 'react-router';

import apolloClient from 'apolloClient';
import history from 'utils/history';
import { pathHomeCommunities } from 'utils/paths';

import Community from '../Community';

const COMMUNITY_GET = gql`
  query($identifier: String!) {
    community(identifier: $identifier) {
      identifier
      title
      description
      createdAt
    }
  }
`;

const COMMUNITY_MODIFY = gql`
  mutation($identifier: String!, $title: String!, $description: String!) {
    updateCommunity(
      identifier: $identifier
      title: $title
      description: $description
    ) {
      identifier
      title
      description
      createdAt
    }
  }
`;

const Modify = props => {
  const [community, setCommunity] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { identifier } = props.match.params;
    apolloClient
      .query({ query: COMMUNITY_GET, variables: { identifier } })
      .then(res => {
        setCommunity(res.data.community);
      })
      .catch();
  }, []);

  const handleUpdate = modifiedCommunity => {
    setLoading(true);
    apolloClient
      .mutate({ mutation: COMMUNITY_MODIFY, variables: modifiedCommunity })
      .then(() => {
        // props.modifyCommunity(res.data.updateCommunity);
        history.push(pathHomeCommunities);
      })
      .catch()
      .finally(() => setLoading(false));
  };

  const handleCancel = () => {
    history.push(pathHomeCommunities);
  };

  if (!community) {
    return null;
  }

  return (
    <Community
      community={community}
      onUpdate={handleUpdate}
      onCancel={handleCancel}
      loading={loading}
    />
  );
};

Modify.propTypes = {
  // modifyCommunity: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      identifier: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapDispatchToProps = () => ({
  // modifyCommunity: evt => dispatch(modifyCommunity(evt)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(withRouter(Modify));
