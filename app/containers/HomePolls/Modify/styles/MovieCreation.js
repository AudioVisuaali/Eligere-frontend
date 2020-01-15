import styled from 'styled-components';
import A from 'components/Button';

const MovieCreation = styled(A)`
  border: 2px dashed rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.1);
  padding: 6px;
  width: 100%;
  height: 100%;
  display: block;

  & svg {
    opacity: 0.6;
    width: 50px;
    height: 50px;
  }
`;

export default MovieCreation;
