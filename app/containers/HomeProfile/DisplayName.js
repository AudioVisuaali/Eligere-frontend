import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { gql } from 'apollo-boost';
import { FormattedMessage } from 'react-intl';

import apolloClient from 'apolloClient';
import { handleUsernameChangeAction } from 'containers/App/actions';
import { makeSelectUser } from 'containers/App/selectors';
import Box from 'components/Box';
import Label from 'components/Label';
import Button from 'components/Button';
import TextField from 'components/TextField';

import messages from './messages';
import Header from './styles/Header';
import Head from './styles/Head';
import Section from './styles/Section';
import Title from './styles/Title';
import Actions from './styles/Actions';

const USER_DISPLAY_NAME_CHANGE = gql`
  mutation($displayName: String!) {
    updateDisplayName(displayName: $displayName)
  }
`;

const DisplayName = props => {
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState(props.user.displayName);

  const handleChange = e => {
    setDisplayName(e.target.value);
  };

  const updateDisplayName = e => {
    e.preventDefault();
    setLoading(true);
    apolloClient
      .mutate({
        mutation: USER_DISPLAY_NAME_CHANGE,
        variables: { displayName },
      })
      .then(res => {
        props.handleDisplayNameChange(res.data.updateDisplayName);
      })
      .catch()
      .finally(() => setLoading(false));
  };

  const disableSave = props.user.displayName === displayName;

  return (
    <form onSubmit={updateDisplayName}>
      <Section>
        <Header>
          <Head>
            <Box width="10px" />
            <Title>
              <FormattedMessage {...messages.profileTitle} />
            </Title>
          </Head>
        </Header>
      </Section>

      <Section>
        <TextField
          title={<FormattedMessage {...messages.profileDisplayName} />}
          formnovalidate
          disabled={loading}
          value={displayName}
          onChange={handleChange}
        />
      </Section>

      <Section>
        <Actions>
          <Button type="submit" disabled={disableSave}>
            <FormattedMessage {...messages.update} />
          </Button>
        </Actions>
      </Section>
    </form>
  );
};

DisplayName.propTypes = {
  user: PropTypes.object.isRequired,
  handleDisplayNameChange: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = dispatch => ({
  handleDisplayNameChange: evt => dispatch(handleUsernameChangeAction(evt)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DisplayName);
