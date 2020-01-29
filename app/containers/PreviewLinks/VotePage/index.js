import React from 'react';
import PropTypes from 'prop-types';

import { generatePathPoll } from 'utils/paths';
import ShareSquareSVG from 'svgs/ShareSquare';
import Container from './styles/Container';
import BackgroundImage from './styles/BackgroundImage';
import HoverEffect from './styles/HoverEffect';
import Text from './styles/Text';

const PreviewLinkPoll = ({ poll }) => {
  const gotoPoll = e => {
    e.preventDefault();
    const url = generatePathPoll(poll);
    const win = window.open(url, '_blank');
    win.focus();
  };

  return (
    <Container onClick={gotoPoll} href={generatePathPoll(poll)}>
      {poll.image && <BackgroundImage src={poll.image} />}
      <BackgroundImage src="https://audiovisuaali.net/images/backgrounds/W7.png" />
      <HoverEffect>
        <ShareSquareSVG />
        <Text>Open votin page</Text>
      </HoverEffect>
    </Container>
  );
};

PreviewLinkPoll.propTypes = {
  poll: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default PreviewLinkPoll;
