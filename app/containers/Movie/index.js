import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import TextField from 'components/TextField';
import TextArea from 'components/TextArea';
import { dateToStringDashed } from 'utils/time';

import messages from './messages';
import Row from './styles/Row';
import Thumbnail from './styles/Thumbnail';
import Title from './styles/Title';
import Description from './styles/Description';
import Info from './styles/Info';

import Container from './styles/Container';
import Meta from './styles/Meta';
import GenresSelector from './GenresSelector';

const parseValue = e => parseInt(e.target.value, 10);

const getDate = str => {
  const d = new Date(parseInt(str, 10));
  return dateToStringDashed(d);
};

const Movie = props => {
  const { intl, movie, onChange } = props;

  const [title, setTitle] = useState(movie ? movie.title : '');
  const [description, setDescription] = useState(
    movie ? movie.description : '',
  );

  const [rottenTomatoes, setRottenTomatoes] = useState(
    movie ? movie.ratings.rottenTomatoes : '',
  );
  const [metacritic, setMetacritic] = useState(
    movie ? movie.ratings.metacritic : '',
  );
  const [googleUsers, setGoogleUsers] = useState(
    movie ? movie.ratings.googleUsers : '',
  );
  const [imdb, setImdb] = useState(movie ? movie.ratings.imdb : '');
  const [duration, setDuration] = useState(movie ? movie.duration : '');
  const [released, setReleased] = useState(
    movie ? getDate(movie.released) : '',
  );

  const [genres, setGenres] = useState(movie ? movie.genres : []);

  const generateMovie = () => ({
    title,
    description,
    ratings: {
      rottenTomatoes,
      metacritic,
      googleUsers,
      imdb,
    },
    duration,
    released,
    genres,
  });

  useEffect(() => {
    if (onChange) {
      onChange(generateMovie());
    }
  }, [
    title,
    description,
    rottenTomatoes,
    metacritic,
    googleUsers,
    imdb,
    duration,
    released,
    genres,
  ]);

  return (
    <Container>
      <Row>
        <Thumbnail src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9" />
        <Info>
          <Title>
            <TextField
              title={intl.formatMessage(messages.movieTitle)}
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </Title>
          <Description>
            <TextArea
              title={intl.formatMessage(messages.movieDescription)}
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </Description>
        </Info>
      </Row>

      <Meta>
        <div>
          <TextField
            type="number"
            min="0"
            max="100"
            title={intl.formatMessage(messages.rottenTomatoes)}
            value={rottenTomatoes}
            onChange={e => setRottenTomatoes(parseValue(e))}
          />
        </div>
        <div>
          <TextField
            type="number"
            min="0"
            max="100"
            title={intl.formatMessage(messages.metacritic)}
            value={metacritic}
            onChange={e => setMetacritic(parseValue(e))}
          />
        </div>
        <div>
          <TextField
            type="number"
            min="0"
            max="100"
            title={intl.formatMessage(messages.googleUsers)}
            value={googleUsers}
            onChange={e => setGoogleUsers(parseValue(e))}
          />
        </div>
        <div>
          <TextField
            type="number"
            min="0"
            max="100"
            title={intl.formatMessage(messages.imdb)}
            value={imdb}
            onChange={e => setImdb(parseValue(e))}
          />
        </div>
        <div>
          <TextField
            type="number"
            min="0"
            title={intl.formatMessage(messages.duration)}
            value={duration}
            onChange={e => setDuration(parseValue(e))}
          />
        </div>
        <div>
          <TextField
            type="date"
            title={intl.formatMessage(messages.releaseDate)}
            value={released}
            onChange={e => setReleased(e.target.value)}
          />
        </div>
      </Meta>

      <GenresSelector genres={genres} onChange={setGenres} />
    </Container>
  );
};

Movie.propTypes = {
  intl: PropTypes.object,
  movie: PropTypes.object,
  onChange: PropTypes.func,
};

export default injectIntl(Movie);
