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
import { SESSION_TOKEN, removeItem } from 'utils/localStorage';
import Box from 'components/Box';
import LogOutSVG from 'svgs/LogOut';

import messages from './messages';
import Action from './styles/Action';
import Header from './styles/Header';
import Head from './styles/Head';
import Section from './styles/Section';
import Title from './styles/Title';
import Actions from './styles/Actions';

const Sessions = props => {
  const handleLogout = () => {
    removeItem(SESSION_TOKEN);
    props.handleLogOutAction('logout');
  };

  return (
    <>
      <Section>
        <Header>
          <Head>
            <Box width="10px" />
            <Title>
              <FormattedMessage {...messages.profileSessions} />
            </Title>
          </Head>
        </Header>
      </Section>

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

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Sessions);
