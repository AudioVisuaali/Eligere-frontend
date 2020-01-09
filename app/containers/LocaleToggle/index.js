/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Language from 'components/Language';
import Wrapper from './Wrapper';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

export const LocaleToggle = props => (
  <Wrapper>
    <Language
      centered={props.centered}
      value={props.locale}
      values={appLocales}
      onToggle={props.onLocaleToggle}
    />
  </Wrapper>
);

LocaleToggle.propTypes = {
  centered: PropTypes.bool,
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({
    locale,
  }),
);

const mapDispatchToProps = dispatch => ({
  onLocaleToggle: evt => dispatch(changeLocale(evt)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocaleToggle);
