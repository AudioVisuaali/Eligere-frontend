/**
 *
 * Breadcrumb
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Crumb from './styles/Crumb';
import Text from './styles/Text';

const Breadcrumb = ({ children, onClick, icon, ...rest }) => {
  const handleClick = e => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <Crumb onClick={handleClick} {...rest}>
      {icon}
      <Text>{children}</Text>
    </Crumb>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  icon: PropTypes.node,
};

export default Breadcrumb;
