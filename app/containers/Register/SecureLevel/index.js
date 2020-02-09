import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SecureLevelBar from 'components/SecureLevelBar';

const SecureContainer = styled.div`
  height: 0;
  overflow: visible;

  opacity: ${p => (p.faded ? 0.4 : 1)};

  will-change: opacity;
  transition: opacity 200ms;
`;

const barStyle = {
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 0,
  borderTopRightRadius: 4,
  borderBottomRightRadius: 0,
};

const SecureLevel = props => (
  <SecureContainer faded={props.faded}>
    <SecureLevelBar style={barStyle} level={props.level} />
  </SecureContainer>
);

SecureLevel.propTypes = {
  faded: PropTypes.bool.isRequired,
  level: PropTypes.number.isRequired,
};

export default SecureLevel;
