import styled from 'styled-components';

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;

  & > * {
    width: 33.333%;
    margin-bottom: 20px;
    padding-right: 10px;

    &:nth-child(2n) {
      padding-right: 10px;
      padding-left: 10px;
    }

    &:nth-child(3n) {
      padding-left: 10px;
      padding-right: 0;
    }
  }
`;

export default Meta;
