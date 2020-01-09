import React from 'react';
import PropTypes from 'prop-types';
import IFrame from './styles/IFrame';

const YoutubePlayer = ({ videoId }) => (
  <IFrame
    src={`https://www.youtube.com/embed/${videoId}`}
    frameBorder="0"
    autoplay
    allowfullscreen="allowfullscreen"
  ></IFrame>
);

YoutubePlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default YoutubePlayer;
