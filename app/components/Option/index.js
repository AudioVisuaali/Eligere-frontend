import React from 'react';
import PropTypes from 'prop-types';

import Option from './styles/Option';

const OptionContainer = props => {
  const { children, value } = props;

  return <Option value={value}>{children}</Option>;
};

OptionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default OptionContainer;
