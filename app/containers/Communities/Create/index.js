/**
 *
 * HomePolls / Create
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import { gql } from 'apollo-boost';

import apolloClient from 'apolloClient';
import Modal from 'components/Modal';
import history from 'utils/history';
import { pathHomeCommunities } from 'utils/paths';
import Community, { defaultCommunity } from 'containers/Community';
import { communityAdd } from 'containers/HomePage/actions';

import messages from './messages';

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
  const { intl } = props;
  const [creating, setCreating] = useState(false);
  const [community, setCommunity] = useState(defaultCommunity);

  const handleCreate = () => {
    setCreating(true);
    apolloClient
      .query({ query: COMMUNITY_CREATE, variables: community })
      .then(res => {
        props.communityAdd(res.data.createCommunity);
        goToCommunities();
      })
      .catch()
      .finally(() => setCreating(false));
  };

  const goToCommunities = () => {
    history.push(pathHomeCommunities);
  };

  return (
    <Modal
      maxWidth={600}
      title={intl.formatMessage(messages.createCommunity)}
      disableAccept={creating}
      onAccept={handleCreate}
      onClose={goToCommunities}
    >
      <Community
        community={community}
        onChange={setCommunity}
        disableFields={creating}
      />
    </Modal>
  );
};

Create.propTypes = {
  communityAdd: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  communityAdd: evt => dispatch(communityAdd(evt)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, injectIntl)(Create);
