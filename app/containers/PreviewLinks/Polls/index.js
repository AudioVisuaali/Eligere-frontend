import React from 'react';
import PropTypes from 'prop-types';

import { pathHomePolls } from 'utils/paths';
import history from 'utils/history';
import RowPlaceholder from './styles/RowPlaceholder';
import Container from './styles/Container';
import Text from './styles/Text';
import Zoom from './styles/Zoom';

const PreviewLinkPoll = () => {
  const gotoPoll = e => {
    e.preventDefault();
    history.push(pathHomePolls);
  };

  return (
    <Container onClick={gotoPoll} href={pathHomePolls}>
      <Zoom>
        <Text>Polls</Text>
        <RowPlaceholder />
        <RowPlaceholder />
        <RowPlaceholder />
      </Zoom>
    </Container>
  );
};

PreviewLinkPoll.propTypes = {
  poll: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default PreviewLinkPoll;
