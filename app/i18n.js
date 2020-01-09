/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
require('@formatjs/intl-pluralrules/polyfill');
require('@formatjs/intl-pluralrules/dist/locale-data/en');

const enTranslationMessages = require('./translations/en.json');
const fiTranslationMessages = require('./translations/fi.json');
const sweTranslationMessages = require('./translations/swe.json');
const norTranslationMessages = require('./translations/nor.json');
const frTranslationMessages = require('./translations/fr.json');

const DEFAULT_LOCALE = 'en';

// prettier-ignore
const appLocales = [
  'en',
  'fi',
  'swe',
  'nor',
  'fr'
];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  fi: formatTranslationMessages('fi', fiTranslationMessages),
  swe: formatTranslationMessages('swe', sweTranslationMessages),
  nor: formatTranslationMessages('nor', norTranslationMessages),
  fr: formatTranslationMessages('fr', frTranslationMessages),
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
