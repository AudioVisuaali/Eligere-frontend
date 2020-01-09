import styled from 'styled-components';

const Thumbnail = styled.img`
  height: 140px;
  width: 224px;
  position: relative;
  transition: transform 200ms;

  opacity: ${p => (p.showImage ? 1 : 0)};
`;

export default Thumbnail;
