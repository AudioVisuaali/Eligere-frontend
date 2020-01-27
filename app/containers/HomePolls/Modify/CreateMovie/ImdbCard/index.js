import React from 'react';
import PropTypes from 'prop-types';
import Result from './styles/Result';
import Thumbnail from './styles/Thumbnail';
import Information from './styles/Information';
import Title from './styles/Title';
import Meta from './styles/Meta';
import Year from './styles/Year';
import Stars from './styles/Stars';

const ImdbCard = ({ disabled, onClick, imdb }) => (
  <Result disabled={disabled} onClick={() => onClick(imdb)}>
    {imdb.image && <Thumbnail src={imdb.image} />}
    <Information>
      <Title>{imdb.title}</Title>
      <Meta>
        {imdb.year && <Year>{imdb.year}</Year>}
        {imdb.stars && <Stars>{imdb.stars}</Stars>}
      </Meta>
    </Information>
  </Result>
);

ImdbCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  imdb: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    stars: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImdbCard;
