import React from 'react';
import { generatePathHomePollMovieCreateModify } from 'utils/paths';
import history from 'utils/history';

import MovieLink from './MovieLink';

const Movies = props => {
  const { poll } = props;

  const goToMoviePage = (movie, e) => {
    e.preventDefault();
    const url = generatePathHomePollMovieCreateModify(poll, movie);
    history.push(url);
  };

  const movieLink = movie => {
    const url = generatePathHomePollMovieCreateModify(poll, movie);

    return (
      <MovieLink onClick={e => goToMoviePage(movie, e)} href={url}>
        {movie.title}
      </MovieLink>
    );
  };

  return poll.movies.map(movieLink);
};

export default Movies;
