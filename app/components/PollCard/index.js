import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { generatePathPoll } from 'utils/paths';
import history from 'utils/history';
import { dateToString } from 'utils/time';
import Link from './styles/Link';
import Container from './styles/Container';
import Title from './styles/Title';
import Description from './styles/Description';
import Thumbnail from './styles/Thumbnail';
import Content from './styles/Content';
import Times from './styles/Times';
import Time from './styles/Time';
import Actions from './styles/Actions';
import Action from './styles/Action';

const isOpen = (start, end) => {
  const nDate = new Date(); // Now
  const sDate = new Date(parseInt(start, 10)); // Start
  const eDate = new Date(parseInt(end, 10)); // End
  if (!end && !start) {
    return true;
  }

  if (sDate && !eDate) {
    if (sDate.getTime() - nDate.getTime() > 0) {
      return false;
    }

    return true;
  }

  if (!sDate && eDate) {
    if (eDate.getTime() - nDate.getTime() > 0) {
      return true;
    }

    return false;
  }

  if (
    sDate.getTime() - nDate.getTime() > 0 &&
    eDate.getTime() - nDate.getTime() < 0
  ) {
    return true;
  }

  return false;
};

const PollCard = props => {
  const { poll, onEdit, ...rest } = props;
  const [imageLoaded, setImageLoaded] = useState(false);
  const {
    title,
    description,
    createdAt,
    userRequired,
    opensAt,
    closesAt,
  } = poll;

  const generatedUrl = generatePathPoll(poll);

  const handleRedirect = e => {
    e.preventDefault();
    history.push(generatedUrl);
  };

  return (
    <Container {...rest}>
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
        <Actions>
          <Times>
            <Time>
              <strong>Created:</strong> {'dateToString(createdAt)'}
            </Time>
            <Time>
              <strong>Created:</strong> {'dateToString(createdAt)'}
            </Time>
            <Time>
              <strong>{isOpen(opensAt, closesAt) ? 'Open' : 'Closed'}</strong>
            </Time>
          </Times>
          <Action onClick={onEdit}>Edit</Action>
        </Actions>
      </Content>
    </Container>
  );
};

PollCard.propTypes = {
  onEdit: PropTypes.func,
  poll: PropTypes.shape({
    identifier: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.string,
    userRequired: PropTypes.bool,
    opensAt: PropTypes.string,
    closesAt: PropTypes.string,
  }),
};

export default PollCard;
