import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const Dot = styled.circle`
  animation: ${load} 3s infinite;
  ${props => props.delay && `animation-delay: ${props.delay}ms;`}
`;

Dot.propTypes = {
  delay: PropTypes.number,
};

export default Dot;
