/**
 *
 * LoadingBarTop
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Bar from './styles/Bar';
import Progress from './styles/Progress';
import ProgressContainer from './styles/ProgressContainer';

function LoadingBarTop(props) {
  return (
    <Bar>
      <ProgressContainer>
        <Progress progress={props.progress} />
      </ProgressContainer>
    </Bar>
  );
}

LoadingBarTop.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default LoadingBarTop;
