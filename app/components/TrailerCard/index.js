import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import history from 'utils/history';
import { generatePathHomePollMovieTrailerModify, getMocks } from 'utils/paths';

import Link from './styles/Link';
import Container from './styles/Container';
import Thumbnail from './styles/Thumbnail';
import Title from './styles/Title';
import Content from './styles/Content';

const TrailerCard = props => {
  const { trailer } = props;
  const [url, setUrl] = useState('');

  useEffect(() => {
    const { poll, movie } = getMocks(props.match);

    const genUrl = generatePathHomePollMovieTrailerModify(poll, movie, trailer);
    setUrl(genUrl);
  }, []);

  const handleRedirect = e => {
    e.preventDefault();
    history.push(url);
  };

  return (
    <Container>
      <Link onClick={handleRedirect} href={url}>
        <Thumbnail src={trailer.thumbnailURL} />
      </Link>
      <Content>
        <Title onClick={handleRedirect} href={url}>
          {trailer.title}
        </Title>
      </Content>
    </Container>
  );
};

TrailerCard.propTypes = {
  trailer: PropTypes.shape({
    thumbnailURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      identifier: PropTypes.string.isRequired,
      slugTitle: PropTypes.string.isRequired,
      movieIdentifier: PropTypes.string.isRequired,
      movieSlugTitle: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(TrailerCard);
