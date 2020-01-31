/**
 *
 * ProgressBar
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Bar from './styles/Bar';
import Progress from './styles/Progress';
import ProgressContainer from './styles/ProgressContainer';

function ProgressBar(props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(props.progress);
  }, [props.progress]);

  return (
    <Bar>
      <ProgressContainer>
        <Progress progress={progress} />
      </ProgressContainer>
    </Bar>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
