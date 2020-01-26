import React from 'react';
import PropTypes from 'prop-types';
import Result from './styles/Result';
import Thumbnail from './styles/Thumbnail';
import Information from './styles/Information';
import Title from './styles/Title';
import Meta from './styles/Meta';
import Year from './styles/Year';
import Stars from './styles/Stars';

const ImdbCard = props => (
  <Result>
    <Thumbnail src={props.imdb.image} />
    <Information>
      <Title>{props.imdb.title}</Title>
      <Meta>
        <Year>{props.imdb.year}</Year>
        <Stars>{props.imdb.stars}</Stars>
      </Meta>
    </Information>
  </Result>
);

ImdbCard.propTypes = {
  imdb: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    stars: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImdbCard;
