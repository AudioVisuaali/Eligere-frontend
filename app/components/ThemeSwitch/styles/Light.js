import styled, { css } from 'styled-components';

const active = css`
  opacity: 1;
  color: #080808;
`;

const Light = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.4;
  color: #fff;

  transition: opacity 30ms, color 300ms;

  ${props => props.active && active}
`;

export default Light;
