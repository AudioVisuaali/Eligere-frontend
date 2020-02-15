import React from 'react';
import PropTypes from 'prop-types';

import Dot from './Dot';
import Dots from './Dots';

const LoadingIndicator = ({ size = 132 }) => (
  <svg style={{ width: size }} viewBox="0 0 132 38">
    <Dots fill="#a3a3a3">
      <Dot cx="25" cy="20" r="10"></Dot>
      <Dot delay={200} cx="55" cy="20" r="10"></Dot>
      <Dot delay={400} cx="85" cy="20" r="10"></Dot>
    </Dots>
  </svg>
);

LoadingIndicator.propTypes = {
  size: PropTypes.number,
};

export default LoadingIndicator;
