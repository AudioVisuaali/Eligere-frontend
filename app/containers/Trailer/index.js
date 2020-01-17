import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import { getVideoSlug } from 'utils/video';
import TextField from 'components/TextField';
import YoutubePlayer from 'components/YoutubePlayer';
import RatioContainer from 'components/RatioContainer';

import Container from './styles/Container';
import messages from './messages';

const playerStyle = {
  width: '100%',
  marginRight: 0,
  height: '100%',
};

const ratioContainerStyle = { marginBottom: 20 };

const Trailer = props => {
  const { trailer, onChange, intl } = props;
  const videoSlug = getVideoSlug(trailer.url);

  const handleChange = e => {
    onChange({
      ...trailer,
      url: e.target.value,
    });
  };

  return (
    <Container>
      <RatioContainer style={ratioContainerStyle} ratio={16 / 9}>
        <YoutubePlayer style={playerStyle} videoId={videoSlug} />
      </RatioContainer>
      <TextField
        value={trailer.url}
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
