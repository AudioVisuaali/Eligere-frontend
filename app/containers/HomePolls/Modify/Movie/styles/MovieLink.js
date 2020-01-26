import styled from 'styled-components';
import A from 'components/A';

const MovieLink = styled(A)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 4px rgba(22, 22, 22, 0.4);

  will-change: box-shadow;

  transition: box-shadow 200ms;

  &:hover {
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.6);
  }
`;

export default MovieLink;
