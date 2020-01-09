/*
 * LocaleToggle Messages
 *
 * This contains all the text for the LanguageToggle component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LocaleToggle';

export default defineMessages({
  en: {
    id: `${scope}.en`,
    defaultMessage: 'en',
  },
  fi: {
    id: `${scope}.fi`,
    defaultMessage: 'fi',
  },
  nor: {
    id: `${scope}.nor`,
    defaultMessage: 'nor',
  },
  swe: {
    id: `${scope}.swe`,
    defaultMessage: 'swe',
  },
});
