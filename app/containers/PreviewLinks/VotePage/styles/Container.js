import styled from 'styled-components';

const Container = styled.a`
  width: 200px;
  height: 130px;
  display: block;
  margin-bottom: 30px;
  margin-right: 30px;
  position: relative;

  color: #fff;
  box-shadow: 2px 2px 4px rgba(22, 22, 22, 0.4);
  cursor: pointer;
  border-radius: 6px;
  border: none;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;

  transition: box-shadow 200ms;
  will-change: box-shadow;

  &:hover {
    text-decoration: none;
    box-shadow: 2px 2px 6px rgba(22, 22, 22, 0.6);
  }
`;

export default Container;
