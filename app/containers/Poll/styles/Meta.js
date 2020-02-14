import styled from 'styled-components';

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 20px;

  & > * {
    width: 50%;
    margin-bottom: 20px;
    padding-right: 10px;

    &:nth-child(2n) {
      padding-left: 10px;
    }
  }
`;

export default Meta;
