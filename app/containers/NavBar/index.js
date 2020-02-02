/**
 *
 * NavBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import PersonSVG from 'svgs/Person';
import PollSVG from 'svgs/Poll';
import UserClassSVG from 'svgs/UserClass';
import history from 'utils/history';
import {
  pathFrontPage,
  pathHomePolls,
  pathHomeCommunities,
  pathHomeProfile,
} from 'utils/paths';
import {
  loadAndGotoPolls,
  loadAndGotoCommunities,
} from 'containers/HomePage/actions';
import Link from './styles/Link';
import messages from './messages';

import Nav from './styles/Nav';
import Content from './styles/Content';
import Logo from './styles/Logo';
import Links from './styles/Links';

// <FormattedMessage {...messages.header} />

export function NavBar(props) {
  const { location } = props;

  const handleToElegire = e => {
    e.preventDefault();
  };

  const handleToPolls = e => {
    e.preventDefault();
    props.loadAndGotoPolls();
  };

  const handleToCommunities = e => {
    e.preventDefault();
    props.loadAndGotoCommunities();
  };

  const handleToProfile = e => {
    e.preventDefault();
    history.push(pathHomeProfile);
  };

  const isUrlMatch = compareTo => {
    const { pathname } = location;
    return pathname === compareTo || pathname.startsWith(compareTo);
  };

  return (
    <Nav>
      <Content>
        <Logo onClick={handleToElegire} href={pathFrontPage}>
          ELIGERE
        </Logo>

        <Links>
          <Link
            active={isUrlMatch(pathHomePolls)}
            onClick={handleToPolls}
            href={pathHomePolls}
          >
            <PollSVG />
            <FormattedMessage {...messages.polls} />
          </Link>
          <Link
            active={isUrlMatch(pathHomeCommunities)}
            onClick={handleToCommunities}
            href={pathHomeCommunities}
          >
            <UserClassSVG />
            <FormattedMessage {...messages.communities} />
          </Link>
          <Link
            active={isUrlMatch(pathHomeProfile)}
            onClick={handleToProfile}
            href={pathHomeProfile}
          >
            <PersonSVG />
            <FormattedMessage {...messages.profile} />
          </Link>
        </Links>
      </Content>
    </Nav>
  );
}

NavBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  loadAndGotoPolls: PropTypes.func.isRequired,
  loadAndGotoCommunities: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loadAndGotoPolls: () => dispatch(loadAndGotoPolls()),
  loadAndGotoCommunities: () => dispatch(loadAndGotoCommunities()),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withRouter, withConnect)(NavBar);
