import React from 'react';
import PropTypes from 'prop-types';
import Box from './styles/Box';

const LoadingBox = ({ height, width, size, style, ...rest }) => (
  <Box
    style={{ width: width || size, height: height || size, ...style }}
    {...rest}
  />
);

LoadingBox.propTypes = {
  style: PropTypes.object,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default LoadingBox;
