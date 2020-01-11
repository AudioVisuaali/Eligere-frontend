import styled from 'styled-components';

const MoviesContainer = styled.div`
  & > * {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export default MoviesContainer;
