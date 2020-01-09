import styled from 'styled-components';

const Movies = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;

  & > * {
    border-top: 1px solid rgba(0, 0, 0, 0.2);

    &:last-child {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
`;

export default Movies;
