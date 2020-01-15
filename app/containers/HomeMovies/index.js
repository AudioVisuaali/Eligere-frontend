/**
 *
 * HomeMovies
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { pathHomePollMovie, pathNotFound } from 'utils/paths';

import Modify from './Modify';

const HomeMovies = () => (
  <Switch>
    <Route exact path={pathHomePollMovie} component={Modify} />
    <Redirect to={pathNotFound} />
  </Switch>
);

export default HomeMovies;
