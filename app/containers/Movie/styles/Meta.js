import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-bottom: 15px;

  & > * {
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default Container;
