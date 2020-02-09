/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { gql } from 'apollo-boost';

import apolloClient from 'apolloClient';
import { handleInitialUserLoad } from 'containers/App/actions';
import FrontPage from 'containers/FrontPage/Loadable';
import PollPage from 'containers/PollPage/Loadable';
import CommunityPage from 'containers/CommunityPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LogoutPage from 'containers/LogoutPage';
import {
  pathFrontPage,
  pathRegister,
  pathLogin,
  pathHome,
  pathPoll,
  pathCommunity,
  pathLogout,
  pathNotFound,
} from 'utils/paths';
import GlobalStyle from '../../global-styles';

const USER_CHECK_SESSION = gql`
  query {
    checkSession {
      identifier
      username
      name
      displayName
      createdAt
    }
  }
`;

const App = props => {
  useEffect(() => {
    apolloClient
      .query({ query: USER_CHECK_SESSION })
      .then(res => {
        const user = res.data.checkSession;
        props.handleInitialUserLoad(user);
      })
      .catch(() => props.handleInitialUserLoad());
  }, []);

  return (
    <>
      <Helmet titleTemplate="%s - Elegire" defaultTitle="Elegire">
        <meta name="description" content="Vote for movies" />
      </Helmet>
      <Switch>
        <Route path={pathLogout} component={LogoutPage} />
        <Redirect exact path={pathFrontPage} to={pathLogin} />
        <Route path={[pathRegister, pathLogin]} component={FrontPage} />

        <Route path={pathPoll} component={PollPage} exact />
        <Route path={pathCommunity} component={CommunityPage} exact />

        <Route path={pathHome} component={HomePage} />

        <Route path={pathNotFound} component={NotFoundPage} />
        <Redirect to={pathNotFound} />
      </Switch>
      <GlobalStyle />
    </>
  );
};

App.propTypes = {
  handleInitialUserLoad: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleInitialUserLoad: (usr, polls, communities) =>
    dispatch(handleInitialUserLoad(usr, polls, communities)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(App);
