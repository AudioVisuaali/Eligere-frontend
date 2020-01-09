import styled from 'styled-components';
import fadeIn from 'styles/animations/fadeIn';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  width: 100%;
  height: 100%;

  animation: ${fadeIn} 1.2s;
  animation-delay: 1.8s;
  animation-fill-mode: forwards;
`;

export default Wrapper;
