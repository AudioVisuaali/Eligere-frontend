import styled from 'styled-components';

const Progress = styled.div`
  background-color: #222;
  width: ${p => p.progress}%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
`;

export default Progress;
