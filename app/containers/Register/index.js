/**
 *
 * Register
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { compose } from 'redux';
import { gql } from 'apollo-boost';

import apolloClient from 'apolloClient';
import { pathLogin } from 'utils/paths';
import history from 'utils/history';
import messages from './messages';
import Container from './styles/Container';
import TextField from './styles/TextField';
import Button from './styles/Button';
import A from './styles/A';

const USER_CREATE = gql`
  mutation($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      identifier
      username
      displayName
      createdAt
    }
  }
`;

export const Register = props => {
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [name, setName] = useState('');

  const goToRegister = e => {
    e.preventDefault();
    history.push(pathLogin);
  };

  const handleRegister = e => {
    e.preventDefault();
    setLoading(true);
    apolloClient
      .mutate({ query: USER_CREATE, variables: { username, password } })
      .then(res => {
        console.log(res);
      })
      .catch()
      .finally(() => setLoading(false));
  };

  const isRegisterDisabled =
    password.length < 6 || username.length < 6 || loading;

  return (
    <Container onSubmit={handleRegister}>
      <TextField
        title={intl.formatMessage(messages.username)}
        required
        type="username"
        autocomplete="username"
        value={username}
        disabled={loading}
        onChange={e => setUsername(e.target.value)}
      />

      <TextField
        title={intl.formatMessage(messages.name)}
        required
        type="text"
        autocomplete="name"
        value={name}
        disabled={loading}
        onChange={e => setName(e.target.value)}
      />

      <TextField
        title={intl.formatMessage(messages.password)}
        required
        type="password"
        autocomplete="password"
        value={password}
        disabled={loading}
        onChange={e => setPassword(e.target.value)}
      />

      <TextField
        title={intl.formatMessage(messages.passwordAgain)}
        required
        type="password"
        autocomplete="password"
        value={passwordAgain}
        disabled={loading}
        onChange={e => setPasswordAgain(e.target.value)}
      />

      <Button type="submit" disabled={isRegisterDisabled}>
        <FormattedMessage {...messages.register} />
      </Button>

      <A href={pathLogin} onClick={goToRegister}>
        <FormattedMessage {...messages.login} />
      </A>
    </Container>
  );
};

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, injectIntl)(Register);
