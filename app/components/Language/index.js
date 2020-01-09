/**
 *
 * Language
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import LanguageOption from 'components/LanguageOption';
import Select from './Select';

const Language = ({ centered, values, value, onToggle }) => (
  <Select centered={centered}>
    {values.map(v => (
      <LanguageOption
        key={v}
        active={value === v}
        value={v}
        onClick={() => onToggle(v)}
      />
    ))}
  </Select>
);

Language.propTypes = {
  centered: PropTypes.bool,
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
};

export default Language;
