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
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';
import { withRouter } from 'react-router';

import apolloClient from 'apolloClient';
import history from 'utils/history';
import { pathHomeCommunities } from 'utils/paths';
import Community from 'containers/Community';
import BlockTitle from 'components/BlockTitle';
import UnsavedChanges from 'components/UnsavedChanges';

import {
  loadAndGotoCommunity,
  communitySet,
} from 'containers/HomePage/actions';
import { makeSelectHomePageCommunity } from 'containers/HomePage/selectors';

import DeleteCommunity from './DeleteCommunity';
import messages from './messages';
import Section from './styles/Section';

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
  const { intl, community } = props;
  const [modifiedCommunity, setModifiedCommunity] = useState(props.community);

  useEffect(() => {
    if (community) {
      return;
    }

    const { identifier } = props.match.params;
    props.loadAndGotoCommunity(identifier);
  }, []);

  useEffect(() => {
    setModifiedCommunity(community);
  }, [community]);

  const handleUpdate = () => {
    apolloClient
      .mutate({ mutation: COMMUNITY_MODIFY, variables: modifiedCommunity })
      .then(res => {
        props.communitySet(res.data.updateCommunity);
        history.push(pathHomeCommunities);
      })
      .catch();
  };

  const resetPoll = () => {
    setModifiedCommunity(community);
  };

  const isChange = () => {
    if (community.title !== modifiedCommunity.title) return true;
    if (community.description !== modifiedCommunity.description) return true;

    return false;
  };

  if (!community || !modifiedCommunity) {
    return null;
  }

  return (
    <>
      <BlockTitle title={intl.formatMessage(messages.modifyCommunity)} />
      <Section>
        <Community
          community={modifiedCommunity}
          onChange={setModifiedCommunity}
        />
      </Section>

      <Section>
        <BlockTitle title={intl.formatMessage(messages.deleteCommunity)} />
        <DeleteCommunity onDelete={() => {}} />
      </Section>

      {isChange() && (
        <UnsavedChanges onReset={resetPoll} onSave={handleUpdate} />
      )}
    </>
  );
};

Modify.propTypes = {
  communitySet: PropTypes.func.isRequired,
  loadAndGotoCommunity: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      identifier: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  intl: PropTypes.object.isRequired,
  community: PropTypes.shape({
    identifier: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

const mapDispatchToProps = dispatch => ({
  loadAndGotoCommunity: (a, b) => dispatch(loadAndGotoCommunity(a, b)),
  communitySet: evt => dispatch(communitySet(evt)),
});

const mapStateToProps = createStructuredSelector({
  community: makeSelectHomePageCommunity(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withRouter, injectIntl)(Modify);
