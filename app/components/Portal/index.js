/**
 *
 * Portal
 *
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Portal = React.forwardRef(function Portal(props, ref) {
  const { children: childrenProps, container } = props;

  const children = React.cloneElement(childrenProps, {
    ref,
  });

  return ReactDOM.createPortal(children, container || document.body);
});

Portal.propTypes = {
  children: PropTypes.node,
  container: PropTypes.element,
};

export default Portal;
