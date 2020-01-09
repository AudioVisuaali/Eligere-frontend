/*
 *
 * LanguageProvider reducer
 *
 */

import produce from 'immer';
import { LOCALE, setItem, getItem } from 'utils/localStorage';

import { CHANGE_LOCALE } from './constants';
import { DEFAULT_LOCALE } from '../../i18n';

export const initialState = {
  locale: getItem(LOCALE) || DEFAULT_LOCALE,
};

/* eslint-disable default-case, no-param-reassign */
const languageProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LOCALE:
        setItem(LOCALE, action.locale);
        draft.locale = action.locale;
        break;
    }
  });

export default languageProviderReducer;
