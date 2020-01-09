import styled, { css } from 'styled-components';

const active = css`
  opacity: 1;
`;
const Dark = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  opacity: 0.4;
  transition: opacity 30ms, color 300ms;

  ${props => props.active && active}
`;

export default Dark;
