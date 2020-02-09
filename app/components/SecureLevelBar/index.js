/**
 *
 * SecureLevelBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const levelSettings = {
  0: {
    color: '#e53935',
    progress: 0,
  },
  1: {
    color: '#e53935',
    progress: 25,
  },
  2: {
    color: '#ff5722',
    progress: 50,
  },
  3: {
    color: '#fdd835',
    progress: 75,
  },
  4: {
    color: '#4caf50',
    progress: 100,
  },
};

const Container = styled.div`
  height: 4px;
  border-radius: 2px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Bar = styled.div`
  height: 100%;
  background-color: ${p => levelSettings[p.level].color};
  width: ${p => levelSettings[p.level].progress}%;

  will-change: background-color, width;
  transition-property: width, background-color;
  transition-duration: 200ms;
`;

function SecureLevelBar(props) {
  const { level, ...rest } = props;
  return (
    <Container {...rest}>
      <Bar level={props.level} />
    </Container>
  );
}

SecureLevelBar.propTypes = {
  level: PropTypes.number.isRequired,
};

export default SecureLevelBar;
