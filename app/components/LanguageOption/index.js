/**
 *
 * LanguageOption
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import Flag from './Countries';

const LanguageOption = ({ active, onClick, value }) => (
  <Option active={active} onClick={onClick}>
    <Flag style={{ width: 30, height: 20 }} locale={value} />
  </Option>
);

LanguageOption.propTypes = {
  active: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default LanguageOption;
