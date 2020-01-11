import React from 'react';
import { generatePathHomePollMovieModify } from 'utils/paths';
import history from 'utils/history';

import MovieLink from './styles/MovieLink';

const Movies = props => {
  const { poll } = props;

  const goToMoviePage = (movie, e) => {
    e.preventDefault();
    const url = generatePathHomePollMovieModify(poll, movie);
    history.push(url);
  };

  return poll.movies.map(movie => {
    const url = generatePathHomePollMovieModify(poll, movie);

    return (
      <MovieLink
        key={movie.identifier}
        onClick={e => goToMoviePage(movie, e)}
        href={url}
      >
        {movie.title}
      </MovieLink>
    );
  });
};

export default Movies;
