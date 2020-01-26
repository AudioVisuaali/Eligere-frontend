import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import TextField from 'components/TextField';
import TextArea from 'components/TextArea';

import messages from './messages';
import Row from './styles/Row';
import Thumbnail from './styles/Thumbnail';
import Title from './styles/Title';
import Description from './styles/Description';
import Info from './styles/Info';
import MetaField from './styles/MetaField';
import RateField from './styles/RateField';

import Container from './styles/Container';
import Meta from './styles/Meta';
import GenresSelector from './GenresSelector';

const parseValue = e => parseInt(e.target.value, 10);

const movieTemplate = {
  title: '',
  setDescription: '',
  ratings: {
    rottenTomatoes: '',
    metacritic: '',
    googleUsers: '',
    imdb: '',
  },
  duration: '',
  released: '',
  genres: [],
};

const Movie = props => {
  const { intl, movie, onChange } = props;

  if (!movie) {
    return movieTemplate;
  }

  const handleField = e => {
    onChange({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  const handleRating = e => {
    const newMovie = {
      ...movie,
      ratings: {
        ...movie.ratings,
        [e.target.name]: parseValue(e.target.value),
      },
    };
    onChange(newMovie);
  };

  const handleNumber = e => {
    onChange({
      ...movie,
      [e.target.name]: parseValue(e.target.value),
    });
  };

  const handleGenres = genres => {
    onChange({
      ...movie,
      genres,
    });
  };

  const { title, description, duration, released, ratings, genres } = movie;

  return (
    <Container>
      <Row>
        <Thumbnail src={movie.thumbnail} />
        <Info>
          <Title>
            <TextField
              name="title"
              title={intl.formatMessage(messages.movieTitle)}
              value={title}
              onChange={handleField}
            />
          </Title>
          <Description>
            <TextArea
              name="description"
              title={intl.formatMessage(messages.movieDescription)}
              value={description}
              onChange={handleField}
            />
          </Description>
        </Info>
      </Row>

      <Meta>
        <RateField>
          <TextField
            name="imdb"
            type="number"
            min="0"
            max="100"
            title={intl.formatMessage(messages.imdb)}
            value={ratings.imdb}
            onChange={handleRating}
          />
        </RateField>
        <RateField>
          <TextField
            name="metacritic"
            type="number"
            min="0"
            max="100"
            title={intl.formatMessage(messages.metacritic)}
            value={ratings.metacritic}
            onChange={handleRating}
          />
        </RateField>
        <RateField>
          <TextField
            name="rottenTomatoes"
            type="number"
            min="0"
            max="100"
            title={intl.formatMessage(messages.rottenTomatoes)}
            value={ratings.rottenTomatoes}
            onChange={handleRating}
          />
        </RateField>
        <RateField>
          <TextField
            name="googleUsers"
            type="number"
            min="0"
            max="100"
            title={intl.formatMessage(messages.googleUsers)}
            value={ratings.googleUsers}
            onChange={handleRating}
          />
        </RateField>
        <MetaField>
          <TextField
            name="duration"
            type="number"
            min="0"
            placeholder="minutes"
            title={intl.formatMessage(messages.duration)}
            value={duration}
            onChange={handleNumber}
          />
        </MetaField>
        <MetaField>
          <TextField
            name="released"
            type="number"
            min="0"
            max="6666"
            placeholder="Year"
            title={intl.formatMessage(messages.releaseDate)}
            value={released}
            onChange={handleNumber}
          />
        </MetaField>
      </Meta>

      <GenresSelector genres={genres} onChange={handleGenres} />
    </Container>
  );
};

Movie.propTypes = {
  intl: PropTypes.object,
  movie: PropTypes.object,
  onChange: PropTypes.func,
};

export default injectIntl(Movie);
