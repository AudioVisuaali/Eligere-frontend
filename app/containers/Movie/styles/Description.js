import styled from 'styled-components';

const Description = styled.div`
  flex-grow: 1;

  & > div {
    height: 100%;

    & > textarea {
      height: 100%;
    }
  }
`;

export default Description;
