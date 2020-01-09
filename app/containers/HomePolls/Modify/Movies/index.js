/**
 *
 * HomePolls / Modify / Movies
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { gql } from 'apollo-boost';
import { withRouter } from 'react-router';
import { injectIntl } from 'react-intl';

import apolloClient from 'apolloClient';
import { modifyPoll } from 'containers/App/actions';
import Movies from 'containers/Movies';
import Modal from 'components/Modal';
import history from 'utils/history';
import { generatePathHomePoll } from 'utils/paths';

import messages from '../../messages';

const MovieModal = props => {
  const goToPoll = () => {
    history.push(generatePathHomePoll(props.poll));
  };

  return (
    <Modal
      title={props.intl.formatMessage(messages.modifyMovie)}
      onClose={goToPoll}
    >
      <Movies />
    </Modal>
  );
};

MovieModal.propTypes = {
  intl: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      identifier: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  poll: PropTypes.object.isRequired,
};

export default withRouter(injectIntl(MovieModal));
