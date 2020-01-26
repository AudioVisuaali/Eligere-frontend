import styled from 'styled-components';
import spin from 'styles/animations/spin';

const LoadingIcon = styled.div`
  position: absolute;
  top: 22px;
  right: 8px;

  & svg {
    animation: ${spin} 400ms infinite;
    width: 20px;
    height: 20px;
    color: orange;
  }
`;

export default LoadingIcon;
