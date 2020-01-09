import styled from 'styled-components';
import device from 'styles/device';
import fadeIn from 'styles/animations/fadeIn';

export default styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media screen and (${device.tablet}) {
    height: auto;
  }

  animation: ${fadeIn} ease 1s;
`;
