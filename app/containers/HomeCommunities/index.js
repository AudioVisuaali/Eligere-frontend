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
  pathHomeCommunityCreate,
  pathNotFound,
} from 'utils/paths';

import Container from './styles/Container';
import Communities from './Communities';
import Create from './Create';
import Modify from './Modify';

const HomeCommunities = () => (
  <Container>
    <Switch>
      <Route exact path={pathHomeCommunities} component={Communities} />
      <Route path={pathHomeCommunityCreate} component={Create} />
      <Route path={pathHomeCommunity} component={Modify} />
      <Redirect to={pathNotFound} />
    </Switch>
  </Container>
);

export default HomeCommunities;
