import styled from 'styled-components';

const Content = styled.div`
  position: absolute;
  will-change: transform;
  transform: translateX(${p => p.offseta}px);

  transition: transform 200ms;
`;

export default Content;
