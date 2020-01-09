import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  padding: 0;

  pointer-events: ${p => (p.allowPointerEvents ? 'auto' : 'none')};

  transition: 200ms ease;
  transition-property: height, opacity;
`;

export default Container;
