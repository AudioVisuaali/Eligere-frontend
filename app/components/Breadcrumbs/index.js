/**
 *
 * Breadcrumbs
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ChevronRightThinSVG from 'svgs/ChevronRightThin';
import Container from './styles/Container';

const chevronStyle = {
  height: 10,
  width: 10,
  marginRight: 10,
  marginLeft: 10,
  flexShrink: 0,
};

const Breadcrumbs = props => (
  <Container>
    {props.children.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Fragment key={index}>
        {!!index && <ChevronRightThinSVG style={chevronStyle} />}
        {item}
      </Fragment>
    ))}
  </Container>
);

Breadcrumbs.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Breadcrumbs;
