import React from 'react';
import PropTypes from 'prop-types';
import { generatePathHomePollMovie } from 'utils/paths';

import MovieLink from './styles/MovieLink';
import Thumbnail from './styles/Thumbnail';

const Movie = ({ movie, onClick }) => {
  const url = generatePathHomePollMovie(movie);

  const goToPage = e => {
    if (onClick) {
      e.preventDefault();
      onClick(movie);
    }
  };

  return (
    <MovieLink key={movie.identifier} onClick={goToPage} href={url}>
      {movie.thumbnail ? (
        <Thumbnail src={movie.thumbnail}></Thumbnail>
      ) : (
        movie.title
      )}
    </MovieLink>
  );
};

Movie.propTypes = {
  onClick: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    identifier: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
