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

export const buttonStyle = props => ({
  padding: '6px 16px',
  color: color(props),
  fontWeight: 500,
  border: '1px solid transparent',
  borderRadius: 8,
  backgroundColor: backgroundColor(props),

  transition: 'all 200ms',

  '&:hover': {
    textDecoration: 'none',
    backgroundColor: hoverBackgroundColor(props),
  },

  '&:focus, :active': {
    color: props.theme.isDark ? props.theme.light[400] : props.theme.light[100],
  },

  '&:disabled, :hover:disabled': {
    color: props.theme.isDark ? props.theme.light[700] : props.theme.light[800],
    cursor: 'not-allowed',
    backgroundColor: disabledBackgroundColor(props),
  },
});

const Button = styled.button(buttonStyle);

export default Button;
