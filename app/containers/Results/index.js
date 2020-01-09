/**
 *
 * Results
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Container from './styles/Container';

export function Results() {
  return (
    <Container>
      <FormattedMessage {...messages.header} />
    </Container>
  );
}

export default Results;
