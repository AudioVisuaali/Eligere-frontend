/**
 *
 * Button.js
 *
 * A common button
 */

import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.light[50] : p.theme.light[50]);
const backgroundColor = p =>
  p.theme.isDark ? p.theme.darkRGBA[20] : p.theme.grey[700];

const hoverBackgroundColor = p =>
  p.theme.isDark ? p.theme.darkRGBA[30] : p.theme.grey[800];

const disabledBackgroundColor = p =>
  p.theme.isDark ? p.theme.grey[700] : p.theme.light[600];

const Button = styled.button`
  padding: 6px 16px;

  color: ${color};
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: ${backgroundColor};

  transition: all 200ms;

  &:hover {
    background-color: ${hoverBackgroundColor};
  }

  &:focus,
  :active {
    color: ${p => (p.theme.isDark ? p.theme.light[400] : p.theme.light[100])};
  }

  &:disabled,
  :hover:disabled {
    color: ${p => (p.theme.isDark ? p.theme.light[700] : p.theme.light[800])};
    cursor: not-allowed;
    background-color: ${disabledBackgroundColor};
  }
`;

export default Button;
