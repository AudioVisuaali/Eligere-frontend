/*
 *
 * ThemeProvider reducer
 *
 */

import produce from 'immer';
import { THEME, setItem, getItem } from 'utils/localStorage';

import { TOGGLE_THEME } from './constants';

export const initialState = {
  isDark: getItem(THEME) !== 'false',
};

export const key = 'theme';

/* eslint-disable default-case, no-param-reassign */
const themeProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_THEME:
        setItem(THEME, !state.isDark);
        draft.isDark = !state.isDark;
        break;
    }
  });

export default themeProviderReducer;
