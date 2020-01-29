import React from 'react';
import PropTypes from 'prop-types';

import { generatePathHomePoll } from 'utils/paths';
import history from 'utils/history';
import ArrowLeftSVG from 'svgs/ArrowLeft';
import Container from './styles/Container';
import BackgroundImage from './styles/BackgroundImage';
import HoverEffect from './styles/HoverEffect';
import Text from './styles/Text';

const PreviewLinkPoll = ({ poll }) => {
  const gotoPoll = e => {
    e.preventDefault();
    history.push(generatePathHomePoll(poll));
  };

  return (
    <Container onClick={gotoPoll} href={generatePathHomePoll(poll)}>
      {poll.image && <BackgroundImage src={poll.image} />}
      <BackgroundImage src="https://audiovisuaali.net/images/backgrounds/W7.png" />
      <HoverEffect>
        <ArrowLeftSVG />
        <Text>{poll.title}</Text>
      </HoverEffect>
    </Container>
  );
};

PreviewLinkPoll.propTypes = {
  poll: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default PreviewLinkPoll;
