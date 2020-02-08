import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { gql } from 'apollo-boost';
import { FormattedMessage } from 'react-intl';

import apolloClient from 'apolloClient';
import BlockTitle from 'components/BlockTitle';
import { handleProfileUpdateAction } from 'containers/App/actions';
import { makeSelectUser } from 'containers/App/selectors';
import Button from 'components/Button';
import TextField from 'components/TextField';

import messages from './messages';
import Section from './styles/Section';
import HalfWidth from './styles/HalfWidth';
import Actions from './styles/Actions';

const USER_PROFILE_UPDATE = gql`
  mutation($displayName: String!, $firstName: String!, $surname: String!) {
    updateProfile(
      displayName: $displayName
      firstName: $firstName
      surname: $surname
    ) {
      displayName
      firstName
      surname
    }
  }
`;

const Profile = props => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(props.user);

  useEffect(() => {
    setProfile(props.user);
  }, [props.user]);

  const handleChange = e => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const updateDisplayName = e => {
    e.preventDefault();
    setLoading(true);
    apolloClient
      .mutate({
        mutation: USER_PROFILE_UPDATE,
        variables: profile,
      })
      .then(res => {
        props.handleProfileUpdateAction(res.data.updateProfile);
      })
      .catch()
      .finally(() => setLoading(false));
  };

  const isChanges = () => {
    if (loading) return true;
    if (props.user.displayName !== profile.displayName) return true;
    if (props.user.firstName !== profile.firstName) return true;
    if (props.user.surname !== profile.surname) return true;

    return false;
  };

  return (
    <form onSubmit={updateDisplayName}>
      <BlockTitle title={<FormattedMessage {...messages.profileTitle} />} />

      <Section>
        <TextField
          name="displayName"
          title={<FormattedMessage {...messages.profileDisplayName} />}
          formnovalidate
          disabled={loading}
          value={profile.displayName}
          onChange={handleChange}
        />
      </Section>

      <Section>
        <HalfWidth>
          <TextField
            name="firstName"
            title={<FormattedMessage {...messages.firstName} />}
            disabled={loading}
            value={profile.firstName}
            onChange={handleChange}
          />

          <TextField
            name="surname"
            title={<FormattedMessage {...messages.surname} />}
            disabled={loading}
            value={profile.surname}
            onChange={handleChange}
          />
        </HalfWidth>
      </Section>

      <Section>
        <Actions>
          <Button type="submit" disabled={!isChanges()}>
            <FormattedMessage {...messages.update} />
          </Button>
        </Actions>
      </Section>
    </form>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  handleProfileUpdateAction: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = dispatch => ({
  handleProfileUpdateAction: evt => dispatch(handleProfileUpdateAction(evt)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Profile);
