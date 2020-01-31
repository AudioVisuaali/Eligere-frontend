/**
 *
 * Breadcrumbs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import ChevronRightThinSVG from 'svgs/ChevronRight';
import Container from './styles/Container';

const chevronStyle = {
  height: 10,
  width: 10,
  marginRight: 5,
  marginLeft: 5,
};

const Breadcrumbs = props => (
  <Container>
    {props.children.reduce((prev, curr) => [
      prev,
      <ChevronRightThinSVG style={chevronStyle} />,
      curr,
    ])}
  </Container>
);

Breadcrumbs.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Breadcrumbs;
