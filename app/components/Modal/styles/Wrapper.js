import styled, { css } from 'styled-components';
import fadeIn from 'styles/animations/fadeIn';
import fadeOut from 'styles/animations/fadeOut';

const fadingOut = css`
  animation: ${fadeOut} 200ms;
  opacity: 0;
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${fadeIn} 200ms;

  ${props => props.fadingOut && fadingOut}
`;

export default Wrapper;
