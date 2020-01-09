import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the theme domain
 */

const selectTheme = state => state.theme || initialState;

/**
 * Select the theme mode
 */

const makeSelectThemeMode = () =>
  createSelector(
    selectTheme,
    themeState => themeState.isDark,
  );

export { selectTheme, makeSelectThemeMode };
