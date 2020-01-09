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
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Label from 'components/Label';
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

export const Register = ({ authenticating }) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [createUser, { data, error }] = useMutation(USER_CREATE);

  const handlePasswordChange = e => setPassword(e.target.value);
  const handleUsernameChange = e => setUsername(e.target.value);
  const handleRegister = e => {
    e.preventDefault();
    createUser({ variables: { username, password } })
      .then(data => {})
      .catch(err => {});
  };

  const goToRegister = e => {
    e.preventDefault();
    history.push(pathLogin);
  };

  const isRegisterDisabled =
    password.length < 6 || username.length < 6 || authenticating;

  return (
    <Container onSubmit={handleRegister}>
      <Label>
        <FormattedMessage {...messages.username} />
      </Label>
      <TextField
        required
        type="username"
        autocomplete="username"
        placeholder="Username"
        value={username}
        disabled={authenticating}
        onChange={handleUsernameChange}
      />

      <Label>
        <FormattedMessage {...messages.password} />
      </Label>
      <TextField
        required
        type="password"
        autocomplete="password"
        placeholder="Password"
        value={password}
        disabled={authenticating}
        onChange={handlePasswordChange}
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
  authenticating: PropTypes.bool,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Register);
