/**
 *
 * HomePolls / Create
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectHomePageCommunities } from 'containers/HomePage/selectors';
import { loadAndGotoCommunities } from 'containers/HomePage/actions';
import CommunityCard from 'components/CommunityCard';
import BlockTitle from 'components/BlockTitle';
import PlusSVG from 'svgs/Plus';
import history from 'utils/history';
import {
  pathHomeCommunityCreate,
  generatePathHomeCommunity,
} from 'utils/paths';

import messages from './messages';
import Action from '../styles/Action';

function CreateCommunity() {
  const handleCreateNew = () => {
    history.push(pathHomeCommunityCreate);
  };

  return (
    <Action onClick={handleCreateNew}>
      <PlusSVG />
      <FormattedMessage {...messages.buttonCommunityCreate} />
    </Action>
  );
}

function Communities(props) {
  useEffect(() => {
    if (!props.communities) {
      props.loadAndGotoCommunities(false);
    }
  }, []);

  const handleEdit = community => {
    history.push(generatePathHomeCommunity(community));
  };

  if (!props.communities) {
    return null;
  }

  if (!props.communities.length) {
    return 'No communities';
  }

  return (
    <>
      <BlockTitle
        title={<FormattedMessage {...messages.communities} />}
        action={<CreateCommunity />}
      />

      {props.communities.map(community => (
        <CommunityCard
          key={community.identifier}
          onEdit={() => handleEdit(community)}
          community={community}
        />
      ))}
    </>
  );
}

Communities.propTypes = {
  communities: PropTypes.array.isRequired,
  loadAndGotoCommunities: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  communities: makeSelectHomePageCommunities(),
});

const mapDispatchToProps = dispatch => ({
  loadAndGotoCommunities: evt => dispatch(loadAndGotoCommunities(evt)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Communities);
