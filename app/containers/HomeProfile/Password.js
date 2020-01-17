import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { gql } from 'apollo-boost';
import { FormattedMessage } from 'react-intl';

import apolloClient from 'apolloClient';
import { handleUsernameChangeAction } from 'containers/App/actions';
import Button from 'components/Button';
import TextField from 'components/TextField';
import BlockTitle from 'components/BlockTitle';

import messages from './messages';
import Section from './styles/Section';
import Actions from './styles/Actions';
import HalfWidth from './styles/HalfWidth';

const USER_PASSWORD_CHANGE = gql`
  mutation($displayName: String!) {
    updateDisplayName(displayName: $displayName)
  }
`;

const DisplayName = () => {
  const [loading, setLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const handleOldPasswordChange = e => {
    setOldPassword(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handlePasswordAgainChange = e => {
    setPasswordAgain(e.target.value);
  };

  const updatePassword = e => {
    e.preventDefault();
    setLoading(true);
    apolloClient
      .mutate({
        mutation: USER_PASSWORD_CHANGE,
        variables: { oldPassword, newPassword: passwordAgain },
      })
      .then(console.log)
      .catch(console.log)
      .finally(() => setLoading(false));
  };

  const allowSubmit =
    oldPassword && password && passwordAgain && password === passwordAgain;

  return (
    <form onSubmit={updatePassword}>
      <BlockTitle title={<FormattedMessage {...messages.profilePassword} />} />

      <TextField
        type="text"
        autoComplete="username"
        disabled={loading}
        style={{ display: 'none' }}
      />

      <HalfWidth>
        <Section>
          <TextField
            title={<FormattedMessage {...messages.oldPassword} />}
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            type="password"
            autoComplete="current-password"
            disabled={loading}
            value={oldPassword}
            onChange={handleOldPasswordChange}
          />
        </Section>
      </HalfWidth>

      <HalfWidth>
        <Section>
          <TextField
            title={<FormattedMessage {...messages.newPassword} />}
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            type="password"
            autoComplete="new-password"
            disabled={loading}
            value={password}
            onChange={handlePasswordChange}
          />
        </Section>

        <Section>
          <TextField
            title={<FormattedMessage {...messages.newPasswordAgain} />}
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            type="password"
            autoComplete="new-password"
            disabled={loading}
            value={passwordAgain}
            onChange={handlePasswordAgainChange}
          />
        </Section>
      </HalfWidth>

      <Section>
        <Actions>
          <Button type="submit" disabled={!allowSubmit}>
            <FormattedMessage {...messages.update} />
          </Button>
        </Actions>
      </Section>
    </form>
  );
};

DisplayName.propTypes = {
  handleDisplayNameChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleDisplayNameChange: evt => dispatch(handleUsernameChangeAction(evt)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(DisplayName);
