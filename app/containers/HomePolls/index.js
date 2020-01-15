/**
 *
 * HomePolls
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  pathHomePolls,
  pathHomePollCreate,
  pathHomePollMovies,
  pathHomePoll,
  pathNotFound,
} from 'utils/paths';
import Polls from 'containers/Polls';
import HomeMovies from 'containers/HomeMovies';

import Container from './styles/Container';
import Create from './Create';
import Modify from './Modify';

const HomePolls = () => (
  <Container>
    <Switch>
      <Route exact path={pathHomePolls} component={Polls} />
      <Route exact path={pathHomePollCreate} component={Create} />
      <Route path={pathHomePollMovies} component={HomeMovies} />
      <Route path={pathHomePoll} component={Modify} />
      <Redirect to={pathNotFound} />
    </Switch>
  </Container>
);

export default HomePolls;
