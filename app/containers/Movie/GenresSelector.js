import React from 'react';
import PropTypes from 'prop-types';
import { genreTranslated } from 'utils/genre';

import Genres from './styles/Genres';
import Genre from './styles/Genre';

const availableGenres = [
  { id: '1', value: 'action' },
  { id: '2', value: 'adventure' },
  { id: '3', value: 'animation' },
  { id: '4', value: 'comedy' },
  { id: '5', value: 'documentary' },
  { id: '6', value: 'drama' },
  { id: '7', value: 'family' },
  { id: '8', value: 'fantasy' },
  { id: '9', value: 'horror' },
  { id: '10', value: 'romantic' },
  { id: '11', value: 'thriller' },
];

const GenresSelector = props => {
  const { genres, onChange } = props;

  const handleGenreToggle = (genre, isActive) => {
    const newGenres = [...genres];
    if (isActive) {
      const index = newGenres.findIndex(genre.id);
      newGenres.splice(index, 1);
    } else {
      newGenres.push(genre.id);
    }

    onChange(newGenres);
  };

  return (
    <Genres>
      {availableGenres.map(genre => {
        const isActive = genres.find(x => x === genre.id);
        return (
          <Genre
            key={genre.id}
            type="button"
            selected={isActive}
            onClick={() => handleGenreToggle(genre, isActive)}
          >
            {genreTranslated(genre.value)}
          </Genre>
        );
      })}
    </Genres>
  );
};

GenresSelector.propTypes = {
  genres: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenresSelector;
