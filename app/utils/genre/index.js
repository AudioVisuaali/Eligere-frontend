import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export function genreTranslated(value) {
  return <FormattedMessage {...messages[value]} />;
}
