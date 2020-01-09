import React from 'react';
import PropTypes from 'prop-types';
import Finland from './Finland';
import USA from './USA';
import Norway from './Norway';
import Sweden from './Sweden';
import France from './France';

const getFlag = locale => {
  switch (locale) {
    case 'en':
      return USA;

    case 'fi':
      return Finland;

    case 'nor':
      return Norway;

    case 'swe':
      return Sweden;

    case 'fr':
      return France;

    default:
      return null;
  }
};

const Flag = ({ locale }) => {
  const FlagSVG = getFlag(locale);
  return <FlagSVG />;
};

Flag.propTypes = {
  locale: PropTypes.string,
};

export default Flag;
