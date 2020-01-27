/**
 *
 * HomePage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  makeSelectUserLoadedInitial,
  makeSelectUser,
} from 'containers/App/selectors';
import NavBar from 'containers/NavBar';
import HomeProfile from 'containers/HomeProfile';
import HomePolls from 'containers/HomePolls';
import HomeCommunities from 'containers/HomeCommunities';
import LoadingBarTop from 'components/LoadingBarTop';
import {
  pathLogin,
  pathHome,
  pathHomePolls,
  pathHomeCommunities,
  pathHomeProfile,
  pathNotFound,
} from 'utils/paths';
import history from 'utils/history';

export function HomePage(props) {
  const { userLoaded, user } = props;

  useEffect(() => {
    document.body.setAttribute('style', 'overflow-y: scroll;');

    return () => {
      document.body.setAttribute('style', 'overflow-y: auto;');
    };
  });

  if (userLoaded && !user) {
    history.push(pathLogin);
    return null;
  }

  if (!userLoaded) {
    return null;
  }

  return (
    <>
      <NavBar />

      {/* <LoadingBarTop /> */}
      <Switch>
        <Redirect exact path={pathHome} to={pathHomePolls} />

        <Route path={pathHomePolls} component={HomePolls} />
        <Route path={pathHomeCommunities} component={HomeCommunities} />
        <Route path={pathHomeProfile} component={HomeProfile} />

        <Redirect to={pathNotFound} />
      </Switch>
    </>
  );
}

HomePage.propTypes = {
  userLoaded: PropTypes.bool.isRequired,
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  userLoaded: makeSelectUserLoadedInitial(),
  user: makeSelectUser(),
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(HomePage);
