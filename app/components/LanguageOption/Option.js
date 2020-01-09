import styled, { css } from 'styled-components';

const active = css`
  opacity: 1;
`;

const Option = styled.button`
  margin: 0 10px 0 0;
  border: none;
  padding: 0;
  opacity: ${props => (props.theme.isDark ? 0.2 : 0.3)};
  border-radius: 3px;
  overflow: hidden;
  background-color: transparent;

  transition: opacity 100ms;

  & svg {
    width: 30px;
  }

  &:hover {
    opacity: 1;
  }

  ${props => props.active && active}
`;

export default Option;
