/**
 *
 * HomeProfile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { handleLogOutAction } from 'containers/App/actions';
import { makeSelectUser } from 'containers/App/selectors';
import BlockTitle from 'components/BlockTitle';
import { SESSION_TOKEN, removeItem } from 'utils/localStorage';
import LogOutSVG from 'svgs/LogOut';

import messages from './messages';
import Action from './styles/Action';
import Section from './styles/Section';
import Actions from './styles/Actions';

const Sessions = props => {
  const handleLogout = () => {
    removeItem(SESSION_TOKEN);
    props.handleLogOutAction('logout');
  };

  return (
    <>
      <BlockTitle title={<FormattedMessage {...messages.profileSessions} />} />

      <Section>
        <Actions>
          <Action onClick={handleLogout}>
            <LogOutSVG /> Logout
          </Action>
        </Actions>
      </Section>
    </>
  );
};

Sessions.propTypes = {
  handleLogOutAction: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = dispatch => ({
  handleLogOutAction: () => dispatch(handleLogOutAction()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Sessions);
