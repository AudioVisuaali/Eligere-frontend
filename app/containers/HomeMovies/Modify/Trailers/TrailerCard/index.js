import React from 'react';
import PropTypes from 'prop-types';

import Button from './styles/Button';
import Container from './styles/Container';
import Thumbnail from './styles/Thumbnail';
import Title from './styles/Title';

const TrailerCard = props => {
  const { trailer, onClick } = props;
  const handleOnClick = e => onClick(trailer, e);

  return (
    <Container>
      <Button onClick={handleOnClick}>
        <Thumbnail src={trailer.thumbnailURL} />
      </Button>
      <Title onClick={handleOnClick}>{trailer.title}</Title>
    </Container>
  );
};

TrailerCard.propTypes = {
  trailer: PropTypes.shape({
    thumbnailURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default TrailerCard;
