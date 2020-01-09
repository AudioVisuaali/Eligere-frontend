/**
 *
 * HomePolls / Create
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectCommunities } from 'containers/App/selectors';
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
  const { communities } = props;

  const handleEdit = community => {
    history.push(generatePathHomeCommunity(community));
  };

  if (!communities.length) {
    return 'No communities';
  }

  return (
    <>
      <BlockTitle
        title={<FormattedMessage {...messages.communities} />}
        action={<CreateCommunity />}
      />
      {communities.map(community => (
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
};

const mapStateToProps = createStructuredSelector({
  communities: makeSelectCommunities(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(Communities);
