import styled from 'styled-components';

const Result = styled.button`
  width: 100%;
  display: flex;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  padding: 0;
  margin: 0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
  height: 44px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.1);

  transition: box-shadow 200ms;

  &:hover {
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  }
`;

export default Result;
