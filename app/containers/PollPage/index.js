/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { gql } from 'apollo-boost';

import apolloClient from 'apolloClient';
import Results from 'containers/Results';
import Box from 'components/Box';
import Movie from 'components/Movie';
import Footer from 'components/Footer';

import Container from './styles/Container';
import Header from './styles/Header';
import Title from './styles/Title';
import Movies from './styles/Movies';

const POLL = gql`
  query($identifier: String!) {
    poll(identifier: $identifier) {
      identifier
      title
      description
      createdAt
      requireUserForSuggesting
      opensAt
      closesAt
      movies {
        identifier
        title
        thumbnail
        description
        released
        duration
        genres {
          id
          value
        }
        ratings {
          imdb
          rottenTomatoes
          metacritic
          googleUsers
        }
        trailers {
          identifier
          platform
          url
          slug
        }
      }
    }
  }
`;

const PollPage = props => {
  const [loading, setloading] = useState(true);
  const [poll, setPoll] = useState(false);

  useEffect(() => {
    document.body.setAttribute('style', 'overflow-x: hidden;');
    const { identifier } = props.match.params;
    apolloClient
      .query({ query: POLL, variables: { identifier } })
      .then(res => setPoll(res.data.poll))
      .catch(console.log)
      .finally(() => setloading(false));

    return () => {
      document.body.setAttribute('style', 'overflow-x: auto;');
    };
  }, []);

  const handleVote = movie => {
    console.log(movie);
  };

  if (loading) return <p>Loading...</p>;

  const { title, movies } = poll;

  return (
    <>
      <Container>
        <Helmet>
          <title>Poll page</title>
          <meta name="description" content="Poll" />
        </Helmet>

        <Header>
          <Box width="10px" />
          <Title>{title}</Title>
        </Header>
        <Results />
        <Movies>
          {movies.map(movie => (
            <Movie key={movie.identifier} movie={movie} onVote={handleVote} />
          ))}
        </Movies>
      </Container>
      <Footer />
    </>
  );
};

PollPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      identifier: PropTypes.string,
    }),
  }),
};

export default PollPage;
