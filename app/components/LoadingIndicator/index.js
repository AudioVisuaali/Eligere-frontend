import React from 'react';

import Dot from './Dot';
import Dots from './Dots';

const LoadingIndicator = () => (
  <svg width="132px" height="58px" viewBox="0 0 132 58">
    <Dots fill="#a3a3a3">
      <Dot cx="25" cy="30" r="10"></Dot>
      <Dot delay={200} cx="65" cy="30" r="10"></Dot>
      <Dot delay={400} cx="105" cy="30" r="10"></Dot>
    </Dots>
  </svg>
);

export default LoadingIndicator;
