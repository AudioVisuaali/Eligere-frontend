/*
 *
 * ThemeProvider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { ThemeProvider } from 'styled-components';

import dark from 'styles/palettes/dark';
import grey from 'styles/palettes/grey';
import light from 'styles/palettes/light';
import darkRGBA from 'styles/palettes/darkRGBA';
import whiteRGBA from 'styles/palettes/whiteRGBA';

import { makeSelectThemeMode } from './selectors';

export function ThemeWrapper(props) {
  const theme = {
    isDark: props.isDark,
    dark,
    grey,
    light,
    darkRGBA,
    whiteRGBA,
  };
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

ThemeWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  isDark: PropTypes.bool,
};

const mapStateToProps = createSelector(
  makeSelectThemeMode(),
  isDark => ({ isDark }),
);

export default connect(mapStateToProps)(ThemeWrapper);
