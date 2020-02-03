/**
 *
 * LogoutPage
 *
 */

import { connect } from 'react-redux';
import { compose } from 'redux';
import { removeItem, SESSION_TOKEN } from 'utils/localStorage';
import history from 'utils/history';
import { pathLogin } from 'utils/paths';
import { handleLogOutAction } from 'containers/App/actions';

/**
 * this logout page IS USED ONLY FOR LOCAL LOGOUT
 *   do not change this to ping the server of logging out of currentuser.
 *   Logging out from the current user if done by a action in App/actions.
 * @param {*} props
 */

export function LogoutPage(props) {
  const getRedirectUrl = () => {
    const { state: routerState } = props.location;
    if (routerState && routerState.redirectTo) {
      return routerState.redirectTo;
    }
    return null;
  };

  removeItem(SESSION_TOKEN);
  props.logout();
  history.push({
    pathname: pathLogin,
    state: {
      redirectTo: getRedirectUrl(),
    },
  });
  return null;
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(handleLogOutAction()),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(LogoutPage);
