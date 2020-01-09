import styled from 'styled-components';

const HalfWidth = styled.div`
  display: flex;

  & > * {
    width: 50%;

    &:first-child {
      padding-right: 15px;
    }

    &:nth-child(2) {
      padding-left: 15px;
    }
  }
`;

export default HalfWidth;
