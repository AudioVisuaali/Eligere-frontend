/**
 *
 * HomeCommunities
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  pathHomeCommunity,
  pathHomeCommunities,
  pathNotFound,
} from 'utils/paths';
import Communities from 'containers/Communities';

import Container from './styles/Container';
import Modify from './Modify';

const HomeCommunities = () => (
  <Container>
    <Switch>
      <Route path={pathHomeCommunity} component={Modify} />
      <Route path={pathHomeCommunities} component={Communities} />
      <Redirect to={pathNotFound} />
    </Switch>
  </Container>
);

export default HomeCommunities;
