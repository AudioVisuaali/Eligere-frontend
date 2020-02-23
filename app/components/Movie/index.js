import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import Box from 'components/Box';
import ExpandingBox from 'components/ExpandingBox';
import YoutubePlayer from 'components/YoutubePlayer';
import Scroller from 'components/Scroller';
import IMDbSVG from 'svgs/IMDb';
import MetaCriticSVG from 'svgs/Metacritic';
import RottenTomatoesSVG from 'svgs/RottenTomatoes';
import { gql } from 'apollo-boost';
import apolloClient from 'apolloClient';

import CircleSVG from 'svgs/Circle';
import ChevronUpSVG from 'svgs/ChevronUp';
import GoogleSVG from 'svgs/Google';
import { generateLength } from 'utils/time';
import Container from './styles/Container';
import Item from './styles/Item';

import Thumbnail from './styles/Thumbnail';
import Metadata from './styles/Metadata';
import Head from './styles/Head';
import Information from './styles/Information';
import Ratings from './styles/Ratings';
import Year from './styles/Year';
import Genres from './styles/Genres';
import Length from './styles/Length';
import Actions from './styles/Actions';
import Aside from './styles/Aside';
import Rating from './styles/Rating';
import Players from './styles/Players';
import SVGContainer from './styles/SVGContainer';
import MovieWrapper from './styles/MovieWrapper';
import PreviewButton from './styles/PreviewButton';
import PreviewWrapper from './styles/PreviewWrapper';

const VOTE_ADD = gql`
  mutation($movie: ID!, $poll: ID!) {
    createVote(movie: $movie, poll: $poll) {
      identifier
      movie
      poll
      user
    }
  }
`;

const VOTE_REMOVE = gql`
  mutation($identifier: ID!) {
    deleteVote(identifier: $identifier)
  }
`;

const Movie = props => {
  const { movie, poll } = props;
  const [isPreview, setIsPreview] = useState(false);

  const handleVote = () => {
    apolloClient.mutate({
      mutation: VOTE_ADD,
      variables: { movie: movie.identifier, poll: poll.identifier },
    });
  };

  const handleUnVote = () => {
    apolloClient.mutate({
      mutation: VOTE_REMOVE,
      variables: { movie: movie.identifier, poll: poll.identifier },
    });
  };

  const VoteAction = () => {
    const votesLeft = poll.totalVotes - poll.myVotes.length;

    const voteAction = movie.voted ? handleUnVote : handleVote;

    const text = movie.voted
      ? `Votes left ${votesLeft} / ${poll.totalVotes}`
      : 'Unvote';
    return (
      <Button disabled={!votesLeft} onClick={voteAction}>
        {text}
      </Button>
    );
  };

  const handlePreview = () => {
    setIsPreview(!isPreview);
  };

  const ratings = () => {
    const { metacritic, imdb, rottenTomatoes, googleUsers } = movie.ratings;
    return (
      <Ratings>
        {imdb && (
          <Rating>
            <IMDbSVG />
            {imdb / 10}/10
          </Rating>
        )}
        {metacritic && (
          <Rating>
            <MetaCriticSVG />
            {metacritic}%
          </Rating>
        )}
        {rottenTomatoes && (
          <Rating>
            <RottenTomatoesSVG />
            {rottenTomatoes}%
          </Rating>
        )}
        {googleUsers && (
          <Rating>
            <GoogleSVG />
            {googleUsers}%
          </Rating>
        )}
      </Ratings>
    );
  };

  const getGenres = () => {
    const { genres } = movie;
    if (!genres.length) {
      return 'No genres';
    }

    return genres.map(g => g.value).join(' / ');
  };

  const Time = () => {
    const { minutes, hours } = generateLength(movie.duration);
    return (
      <Length>
        {hours && `${hours}${'h'}`} {`${minutes}${'min'}`}
      </Length>
    );
  };

  return (
    <Container>
      <MovieWrapper>
        <Item>
          <Box width="10px" />
          <Thumbnail src={movie.thumbnail} />
          <Aside>
            <Metadata>
              <Head>{movie.title}</Head>
              <Information>
                <Year>{movie.released}</Year>
                <CircleSVG />
                <Genres>{getGenres()}</Genres>
                <CircleSVG />
                <Time />
              </Information>
              {ratings()}
            </Metadata>
            <Actions>
              <PreviewButton
                disabled={!movie.trailers.length}
                onClick={handlePreview}
              >
                Preview
                <SVGContainer rotated={isPreview}>
                  <ChevronUpSVG />
                </SVGContainer>
              </PreviewButton>
              <VoteAction />
            </Actions>
          </Aside>
        </Item>
        <ExpandingBox expanded={isPreview}>
          <PreviewWrapper>
            <Scroller>
              <Players>
                {movie.trailers.map(trailer => (
                  <YoutubePlayer
                    key={trailer.identifier}
                    videoId={trailer.slug}
                  />
                ))}
              </Players>
            </Scroller>
          </PreviewWrapper>
        </ExpandingBox>
      </MovieWrapper>
    </Container>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    voted: PropTypes.bool.isRequired,
    identifier: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        value: PropTypes.string,
      }),
    ),
    trailers: PropTypes.array,
    duration: PropTypes.number,
    released: PropTypes.string,
    ratings: PropTypes.shape({
      imdb: PropTypes.number,
      metacritic: PropTypes.number,
      rottenTomatoes: PropTypes.number,
      googleUsers: PropTypes.number,
    }),
  }),
  poll: PropTypes.shape({
    totalVotes: PropTypes.number.isRequired,
    myVotes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    identifier: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
