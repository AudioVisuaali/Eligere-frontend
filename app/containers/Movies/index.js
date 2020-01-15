import React from 'react';
import { generatePathHomeMovie } from 'utils/paths';
import history from 'utils/history';

import MovieLink from './styles/MovieLink';

const Movies = props => {
  const { poll } = props;

  const goToPage = (url, e) => {
    e.preventDefault();
    history.push(url);
  };

  return poll.movies.map(movie => {
    const url = generatePathHomeMovie(movie);

    return (
      <MovieLink
        key={movie.identifier}
        onClick={e => goToPage(url, e)}
        href={url}
      >
        {movie.title}
      </MovieLink>
    );
  });
};

export default Movies;
