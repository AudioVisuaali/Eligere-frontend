/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import BackgroundGradient from 'components/BackgroundGradient';
import Button from 'components/Button';
import history from 'utils/history';
import { pathHome } from 'utils/paths';

import BugSVG from 'svgs/Bug';
import messages from './messages';
import Centered from './styles/Centered';
import Numbers from './styles/Numbers';
import Description from './styles/Description';
import Header from './styles/Header';
import GoHome from './styles/GoHome';

const NotFound = () => {
  const goHome = () => {
    history.push(pathHome);
  };

  return (
    <BackgroundGradient>
      <Centered>
        <Header>
          <BugSVG />
          <Numbers>404</Numbers>
        </Header>
        <Description>
          <FormattedMessage {...messages.description} />
        </Description>
        <GoHome>
          <Button onClick={goHome}>
            <FormattedMessage {...messages.goHome} />
          </Button>
        </GoHome>
      </Centered>
    </BackgroundGradient>
  );
};

export default NotFound;
