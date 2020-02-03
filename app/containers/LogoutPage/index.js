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

export function LogoutPage(props) {
  removeItem(SESSION_TOKEN);
  props.logout();
  history.push(pathLogin);
  return null;
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(handleLogOutAction()),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(LogoutPage);
