import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import TextField from 'components/TextField';
import YoutubePlayer from 'components/YoutubePlayer';
import RatioContainer from 'components/RatioContainer';

import Container from './styles/Container';
import messages from './messages';

const MATCH_URL = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/;

const playerStyle = {
  width: '100%',
  marginRight: 0,
  height: '100%',
};

const ratioContainerStyle = { marginBottom: 20 };

function getVideoSlug(url) {
  if (!url) return '';

  const canPlay = MATCH_URL.test(url);
  if (!canPlay) {
    return '';
  }

  return url.match(MATCH_URL)[1];
}

const Trailer = props => {
  const { trailer, onChange, intl } = props;
  const [url, setUrl] = useState(trailer ? trailer.url : '');

  const videoSlug = getVideoSlug(url);

  const handleChange = e => {
    const { value } = e.target;
    setUrl(value);
    onChange(value);
  };

  return (
    <Container>
      <RatioContainer style={ratioContainerStyle} ratio={16 / 9}>
        <YoutubePlayer style={playerStyle} videoId={videoSlug} />
      </RatioContainer>
      <TextField
        value={url}
        onChange={handleChange}
        title={intl.formatMessage(messages.videoAddress)}
      />
    </Container>
  );
};

Trailer.propTypes = {
  trailer: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Trailer);
