import styled, { css } from 'styled-components';
import A from 'components/A';

const color = p =>
  p.theme.isDark ? p.theme.whiteRGBA[100] : p.theme.grey[700];

const activeStyle = css`
  background-color: rgba(0, 0, 0, 0.3);
`;

const Link = styled(A)`
  padding: 4px 8px;
  font-size: 14px;
  border-radius: 6px;
  background-color: transparent;
  user-select: none;
  display: flex;
  align-items: center;
  color: ${color};
  margin-left: 6px;

  transition: background-color 200ms;

  ${p => p.active && activeStyle};

  &:hover {
    user-select: none;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.3);
  }

  &:focus {
    color: ${color};
  }

  & svg {
    margin-right: 4px;
    width: 16px;
    height: 16px;
  }
`;

export default Link;
