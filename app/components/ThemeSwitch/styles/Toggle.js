import styled, { css } from 'styled-components';

const active = css`
  transform: translateX(100%);
  background-color: #34323d;
`;

const Wrapper = styled.div`
  position: absolute;
  width: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  border-radius: 100px;
  background-color: #fff;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    background-color 300ms;

  ${props => props.active && active}
`;

export default Wrapper;
