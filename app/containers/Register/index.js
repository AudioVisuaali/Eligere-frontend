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
import { setItem, SESSION_TOKEN } from 'utils/localStorage';
import history from 'utils/history';
import { handleLoginAction } from 'containers/App/actions';
import LoadingIndicator from 'components/LoadingIndicator';
import SecureLevel from './SecureLevel';
import messages from './messages';
import Container from './styles/Container';
import TextField from './styles/TextField';
import Button from './styles/Button';
import A from './styles/A';

const USER_CREATE = gql`
  mutation($username: String!, $name: String!, $password: String!) {
    createUser(username: $username, name: $name, password: $password) {
      identifier
      username
      name
      displayName
      createdAt
    }
  }
`;

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

export const fieldUsernameInitial = {
  value: '',
  error: '',
};

export const fieldNameInitial = {
  name: '',
  error: '',
};

export const fieldPasswordInitial = {
  value: '',
  error: '',
  secure: 0,
};

export const fieldPasswordAgainInitial = {
  value: '',
  error: '',
};

export const Register = props => {
  const { intl } = props;
  const [registering, setRegistering] = useState(false);
  const [username, setUsername] = useState(fieldUsernameInitial);
  const [name, setName] = useState(fieldNameInitial);
  const [password, setPassword] = useState(fieldPasswordInitial);
  const [passwordAgain, setPasswordAgain] = useState(fieldPasswordAgainInitial);

  const goToRegister = e => {
    e.preventDefault();
    history.push(pathLogin);
  };

  const handleRegister = () => {
    setRegistering(true);
    apolloClient
      .mutate({
        mutation: USER_CREATE,
        variables: {
          username: username.value,
          name: name.value,
          password: password.value,
        },
      })
      .then(() =>
        apolloClient.query({
          query: LOGIN_USER,
          variables: { username: username.value, password: password.value },
        }),
      )
      .then(res => {
        const { token, user } = res.data.login;
        setItem(SESSION_TOKEN, token);
        props.handleLoginAction(user);
      })
      .catch(() => setRegistering(false));
  };

  const handleUsernameChange = value => {
    let error = null;

    if (!value.length) {
      error = 'Username is required';
    } else if (value.length < 4) {
      error = 'Username too short';
    }

    setUsername({ value, error });
  };

  const handleNameChange = value => {
    let error = null;

    if (!value.length) {
      error = 'Name is required';
    }

    setName({ value, error });
  };

  const handlePasswordChange = e => {
    const { value } = e.target;
    checkPasswordChange(value);
    checkPasswordAgainChange(passwordAgain.value, value);
  };

  const checkPasswordChange = value => {
    let error = null;
    let secureCount = 0;

    // Length
    if (value.length < 6) {
      error = 'Password must be atlast 6 characters';
    } else {
      secureCount += 1;
    }

    // Uppercase
    if (!/[A-Z]/.test(value)) {
      if (!error) {
        error = 'Uppercase letter is required';
      }
    } else {
      secureCount += 1;
    }

    // Number
    if (!/\d/.test(value)) {
      if (!error) {
        error = 'Must contain a number';
      }
    } else {
      secureCount += 1;
    }

    // Special character
    const specialChar = /[!@#€$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value);
    if (!specialChar) {
      if (!error) {
        error = 'Special letters required';
      }
    } else {
      secureCount += 1;
    }

    setPassword({ value, error, secure: secureCount });
  };

  const handlePasswordAgainChange = e => {
    checkPasswordAgainChange(e.target.value);
  };

  const checkPasswordAgainChange = (value, newPassword) => {
    let error;

    const pwToCompare =
      newPassword === undefined ? password.value : newPassword;
    if (pwToCompare !== value) {
      error = 'Passwords do not match';
    }

    setPasswordAgain({ value, error });
  };

  const isBadCredentials = () => {
    if (!username.value && username.error) return true;
    if (!name.value && name.error) return true;
    if (!password.value && password.error) return true;
    if (!passwordAgain.value && passwordAgain.error) return true;

    return false;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const badCredntials = isBadCredentials();
    if (badCredntials) {
      return;
    }
    handleRegister();
  };

  return (
    <Container onSubmit={handleSubmit}>
      <TextField
        title={intl.formatMessage(messages.username)}
        required
        error={username.error}
        type="username"
        maxLength="32"
        autocomplete="username"
        value={username.value}
        disabled={registering}
        onFocus={e => handleUsernameChange(e.target.value)}
        onChange={e => handleUsernameChange(e.target.value)}
      />

      <TextField
        title={intl.formatMessage(messages.name)}
        required
        error={name.error}
        type="text"
        autocomplete="name"
        value={name.value}
        disabled={registering}
        onFocus={e => handleNameChange(e.target.value)}
        onChange={e => handleNameChange(e.target.value)}
      />

      <SecureLevel faded={registering} level={password.secure} />
      <TextField
        title={intl.formatMessage(messages.password)}
        required
        error={password.error}
        type="password"
        autocomplete="password"
        value={password.value}
        disabled={registering}
        onFocus={handlePasswordChange}
        onChange={handlePasswordChange}
      />

      <TextField
        title={intl.formatMessage(messages.passwordAgain)}
        required
        error={passwordAgain.error}
        type="password"
        autocomplete="password"
        value={passwordAgain.value}
        disabled={registering}
        onFocus={handlePasswordAgainChange}
        onChange={handlePasswordAgainChange}
      />

      <Button disabled={registering} type="submit">
        {registering ? (
          <LoadingIndicator size={60} />
        ) : (
          <FormattedMessage {...messages.register} />
        )}
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
  handleLoginAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleLoginAction: user => dispatch(handleLoginAction(user)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, injectIntl)(Register);
