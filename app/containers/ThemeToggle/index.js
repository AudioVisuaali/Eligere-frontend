/**
 *
 * ThemeToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import { makeSelectThemeMode } from 'containers/ThemeProvider/selectors';
import { toggleTheme } from 'containers/ThemeProvider/actions';
import ThemeSwitch from 'components/ThemeSwitch';

import reducer, { key } from 'containers/ThemeProvider/reducer';

const ThemeToggle = ({ isDark, onToggleTheme }) => (
  <ThemeSwitch active={isDark} onClick={onToggleTheme} />
);

ThemeToggle.propTypes = {
  isDark: PropTypes.bool,
  onToggleTheme: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isDark: makeSelectThemeMode(),
});

const mapDispatchToProps = dispatch => ({
  onToggleTheme: () => dispatch(toggleTheme()),
});

export default injectReducer({ key, reducer })(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ThemeToggle),
);
