/**
 *
 * UnsavedChanges
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Container from './styles/Container';
import Notify from './styles/Notify';
import SaveButton from './styles/SaveButton';
import ResetButton from './styles/ResetButton';
import Message from './styles/Message';

function UnsavedChanges(props) {
  return (
    <Container>
      <Notify>
        <Message>
          <FormattedMessage {...messages.unsavedChanges} />
        </Message>
        <div>
          <ResetButton onClick={props.onReset}>
            <FormattedMessage {...messages.reset} />
          </ResetButton>
          <SaveButton onClick={props.onSave}>
            <FormattedMessage {...messages.save} />
          </SaveButton>
        </div>
      </Notify>
    </Container>
  );
}

UnsavedChanges.propTypes = {
  onReset: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default UnsavedChanges;
