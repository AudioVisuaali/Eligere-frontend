import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { generatePathCommunity } from 'utils/paths';
import history from 'utils/history';
import Container from './styles/Container';
import Link from './styles/Link';
import Title from './styles/Title';
import Description from './styles/Description';
import Thumbnail from './styles/Thumbnail';
import Content from './styles/Content';

const CommunityCard = props => {
  const { community, onEdit, ...rest } = props;
  const [imageLoaded, setImageLoaded] = useState(false);
  const { title, description } = community;

  const generatedUrl = generatePathCommunity(community);

  const handleRedirect = e => {
    e.preventDefault();
    history.push(generatedUrl);
  };

  return (
    <Container onClick={onEdit} {...rest}>
      <Link onClick={handleRedirect} href={generatedUrl}>
        <Thumbnail
          onLoad={setImageLoaded}
          showImage={imageLoaded}
          src="https://audiovisuaali.net/images/backgrounds/W7.png"
        />
      </Link>
      <Content>
        <Title onClick={handleRedirect} href={generatedUrl}>
          {title}
        </Title>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
};

CommunityCard.propTypes = {
  onEdit: PropTypes.func,
  community: PropTypes.shape({
    identifier: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
    requireUserForSuggesting: PropTypes.string,
    opensAt: PropTypes.string,
    closesAt: PropTypes.string,
  }),
};

export default CommunityCard;
