import React from 'react';
import { generatePathHomePollMovieCreateModify } from 'utils/paths';
import history from 'utils/history';

import MovieLink from './styles/MovieLink';

const Movies = props => {
  const { poll } = props;

  const goToMoviePage = (movie, e) => {
    e.preventDefault();
    const url = generatePathHomePollMovieCreateModify(poll, movie);
    history.push(url);
  };

  return poll.movies.map(movie => {
    const url = generatePathHomePollMovieCreateModify(poll, movie);

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
