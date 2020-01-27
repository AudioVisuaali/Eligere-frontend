/**
 *
 * HomePolls
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  pathHomePolls,
  pathHomePollMovies,
  pathHomePoll,
  pathNotFound,
} from 'utils/paths';
import Polls from 'containers/Polls';
import HomeMovies from 'containers/HomeMovies';

import Container from './styles/Container';
import Modify from './Modify';

const HomePolls = () => (
  <Container>
    <Switch>
      <Route path={pathHomePollMovies} component={HomeMovies} />
      <Route path={pathHomePoll} component={Modify} />
      <Route path={pathHomePolls} component={Polls} />
      <Redirect to={pathNotFound} />
    </Switch>
  </Container>
);

export default HomePolls;
