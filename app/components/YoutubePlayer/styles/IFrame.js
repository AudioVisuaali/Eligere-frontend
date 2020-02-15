import styled from 'styled-components';

const IFrame = styled.iframe`
  width: 450px;
  height: 253px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  margin-right: 50px;
  background-color: rgba(0, 0, 0, 0.5);

  &:focus {
    outline: none;
  }
`;

export default IFrame;
