import styled from 'styled-components';

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;

  & > * {
    width: 50%;
    margin-bottom: 15px;
    padding-right: 15px;

    &:nth-child(2n) {
      padding-right: 0;
    }
  }
`;

export default Meta;
