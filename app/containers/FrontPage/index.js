/*
 * FrontPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectUser } from 'containers/App/selectors';
import LocaleToggle from 'containers/LocaleToggle';
import Login from 'containers/Login';
import Register from 'containers/Register';
import BackgroundGradient from 'components/BackgroundGradient';
import { pathRegister, pathLogin, pathHome, pathNotFound } from 'utils/paths';
import history from 'utils/history';

import messages from './messages';
import Logo from './styles/Logo';
import Centered from './styles/Centered';
import Description from './styles/Description';
import CodedWithLove from '../CodedWithLove';

export const FrontPage = props => {
  const { user } = props;

  if (user) {
    history.push(pathHome);
  }

  return (
    <BackgroundGradient>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Visuals application homepage" />
      </Helmet>
      <Centered>
        <Logo>
          <FormattedMessage {...messages.title} />
        </Logo>
        <Description>
          <FormattedMessage {...messages.description} />
        </Description>
        <Switch>
          <Route path={pathRegister} component={Register} />
          <Route path={pathLogin} component={Login} />
          <Redirect to={pathNotFound} />
        </Switch>
        <LocaleToggle centered />
        <CodedWithLove />
      </Centered>
    </BackgroundGradient>
  );
};

FrontPage.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(FrontPage);
