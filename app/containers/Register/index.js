/**
 *
 * Register
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
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

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

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
        title={<FormattedMessage {...messages.username} />}
        required
        type="username"
        autocomplete="username"
        placeholder="Username"
        value={username}
        disabled={loading}
        onChange={e => setUsername(e.target.value)}
      />

      <TextField
        title={<FormattedMessage {...messages.password} />}
        required
        type="password"
        autocomplete="password"
        placeholder="Password"
        value={password}
        disabled={loading}
        onChange={e => setPassword(e.target.value)}
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
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(Register);
