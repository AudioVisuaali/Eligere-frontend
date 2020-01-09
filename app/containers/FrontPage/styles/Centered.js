import styled from 'styled-components';
import fadeAndSlideInFromTop from 'styles/animations/fadeAndSlideInFromTop';

const Centered = styled.div`
  flex-shrink: 0;
  max-width: 420px;
  width: 100%;
  margin: 10px 10px 30px;

  animation: ${fadeAndSlideInFromTop} ease 1s;
`;

export default Centered;
