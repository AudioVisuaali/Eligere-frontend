import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;

  & > * {
    padding-right: 15px;
    padding-bottom: 15px;

    &:last-child,
    &:nth-child(4) {
      padding-right: 0;
    }
  }
`;

export default Container;
