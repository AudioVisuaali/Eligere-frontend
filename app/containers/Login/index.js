/**
 *
 * Login
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { gql } from 'apollo-boost';

import { pathRegister } from 'utils/paths';
import history from 'utils/history';
import { SESSION_TOKEN, setItem } from 'utils/localStorage';
import { handleLoginAction } from 'containers/App/actions';

import apolloClient from 'apolloClient';
import messages from './messages';
import Container from './styles/Container';
import TextField from './styles/TextField';
import Button from './styles/Button';
import A from './styles/A';

const LOGIN_USER = gql`
  query($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      tokenExpiration
      user {
        identifier
        username
        name
        displayName
        createdAt
      }
    }
  }
`;

export const Login = props => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handlePasswordChange = e => setPassword(e.target.value);
  const handleUsernameChange = e => setUsername(e.target.value);

  const handleLogIn = e => {
    e.preventDefault();
    setLoading(true);
    apolloClient
      .query({ query: LOGIN_USER, variables: { username, password } })
      .then(res => {
        const { token, user } = res.data.login;
        setItem(SESSION_TOKEN, token);
        const newUser = { ...user, polls: undefined };
        props.handleLogin(newUser);
      })
      .catch()
      .finally(() => setLoading(false));
  };

  const goToRegister = e => {
    e.preventDefault();
    history.push(pathRegister);
  };

  const isLoginAllowed = password.length < 4 || username.length < 4 || loading;

  return (
    <Container onSubmit={handleLogIn}>
      <TextField
        title={<FormattedMessage {...messages.username} />}
        required
        type="username"
        autocomplete="username"
        placeholder="Username"
        value={username}
        disabled={loading}
        onChange={handleUsernameChange}
      />

      <TextField
        title={<FormattedMessage {...messages.password} />}
        required
        type="password"
        autocomplete="current-password"
        placeholder="Password"
        value={password}
        disabled={loading}
        onChange={handlePasswordChange}
      />

      <Button type="submit" disabled={isLoginAllowed}>
        <FormattedMessage {...messages.login} />
      </Button>

      <A href={pathRegister} onClick={goToRegister}>
        <FormattedMessage {...messages.register} />
      </A>
    </Container>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  authenticating: PropTypes.bool,
  location: PropTypes.shape({
    state: PropTypes.any,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleLogin: user => dispatch(handleLoginAction(user)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Login);
