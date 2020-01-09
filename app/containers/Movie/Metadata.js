import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import TextField from 'components/TextField';

import messages from './messages';
import Meta from './styles/Meta';

const Metadata = props => {
  const { intl } = props;
  const [rottenTomatoes, setRottenTomatoes] = useState('');
  const [metacritic, setMetacritic] = useState('');
  const [googleUsers, setGoogleUsers] = useState('');
  const [imdb, setImdb] = useState('');
  const [duration, setDuration] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  return (
    <Meta>
      <div>
        <TextField
          title={intl.formatMessage(messages.rottenTomatoes)}
          value={rottenTomatoes}
          onChange={e => setRottenTomatoes(e.target.value)}
        />
      </div>
      <div>
        <TextField
          title={intl.formatMessage(messages.metacritic)}
          value={metacritic}
          onChange={e => setMetacritic(e.target.value)}
        />
      </div>
      <div>
        <TextField
          title={intl.formatMessage(messages.googleUsers)}
          value={googleUsers}
          onChange={e => setGoogleUsers(e.target.value)}
        />
      </div>
      <div>
        <TextField
          title={intl.formatMessage(messages.imdb)}
          value={imdb}
          onChange={e => setImdb(e.target.value)}
        />
      </div>
      <div>
        <TextField
          title={intl.formatMessage(messages.duration)}
          value={duration}
          onChange={e => setDuration(e.target.value)}
        />
      </div>
      <div>
        <TextField
          title={intl.formatMessage(messages.releaseDate)}
          value={releaseDate}
          onChange={e => setReleaseDate(e.target.value)}
        />
      </div>
    </Meta>
  );
};

Metadata.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(Metadata);
