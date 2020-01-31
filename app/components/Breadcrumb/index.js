/**
 *
 * Breadcrumb
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Crumb from './styles/Crumb';
import Text from './styles/Text';

const Breadcrumb = ({ children, icon, ...rest }) => (
  <Crumb {...rest}>
    {icon}
    <Text>{children}</Text>
  </Crumb>
);

Breadcrumb.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
};

export default Breadcrumb;
