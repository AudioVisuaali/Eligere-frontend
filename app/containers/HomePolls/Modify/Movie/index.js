import React from 'react';
import PropTypes from 'prop-types';
import { generatePathHomePollMovie } from 'utils/paths';
import history from 'utils/history';

import MovieLink from './styles/MovieLink';
import Thumbnail from './styles/Thumbnail';

const goToPage = (url, e) => {
  e.preventDefault();
  history.push(url);
};

const Movie = ({ movie }) => {
  const url = generatePathHomePollMovie(movie);

  return (
    <MovieLink
      key={movie.identifier}
      onClick={e => goToPage(url, e)}
      href={url}
    >
      {movie.thumbnail ? (
        <Thumbnail src={movie.thumbnail}></Thumbnail>
      ) : (
        movie.title
      )}
    </MovieLink>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    identifier: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
