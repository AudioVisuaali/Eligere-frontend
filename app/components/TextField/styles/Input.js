import styled from 'styled-components';

const color = props => (props.theme.isDark ? '#fff' : props.theme.grey[700]);

const borderColor = props => {
  if (props.error) {
    return props.theme.red[600];
  }

  return props.theme.isDark ? props.theme.light[700] : props.theme.grey[700];
};

const borderColorHover = props => {
  if (props.error) {
    return props.theme.red[400];
  }

  return color(props);
};

const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${borderColor};
  color: ${color};
  padding: ${p => (p.hasTitle ? 22 : 8)}px 10px 8px;
  border-radius: 4px;
  width: 100%;

  will-change: border-color;
  transition: border-color 200ms;

  &:hover,
  &:focus {
    border: 1px solid ${borderColorHover};
  }
`;

export default Input;
