import styled, { css } from 'styled-components';
import fadeIn from 'styles/animations/fadeIn';
import fadeOut from 'styles/animations/fadeOut';

const fadingOut = css`
  animation: ${fadeOut} 200ms;
  opacity: 0;
`;

const centered = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const centeredDefault = css`
  padding-top: 100px;

  & > div {
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  ${p => (p.centered ? centered : centeredDefault)}

  animation: ${fadeIn} 200ms;

  ${props => props.fadingOut && fadingOut}
`;

export default Wrapper;
