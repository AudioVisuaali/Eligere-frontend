import styled from 'styled-components';

const Voting = styled.div`
  display: flex;
  margin: 10px 0 20px 0;

  & > * {
    width: 40%;
    margin-right: 10px;

    &:last-child {
      width: 60%;
      margin-left: 10px;
      margin-right: 0;
    }
  }
`;

export default Voting;
