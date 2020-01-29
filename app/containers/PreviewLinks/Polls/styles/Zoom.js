import styled from 'styled-components';

const Zoom = styled.div`
  padding: 14px 20px;
  transform: scale(1);
  transition: transform 200ms;

  &:hover {
    transform: scale(1.03);
  }
`;

export default Zoom;
