import styled from 'styled-components';

const borderColor = props =>
  props.theme.isDark ? props.theme.light[700] : props.theme.grey[700];
const color = props => (props.theme.isDark ? '#fff' : props.theme.grey[700]);

const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${borderColor};
  color: ${color};
  padding: ${p => (p.hasTitle ? 22 : 8)}px 10px 8px;
  border-radius: 4px;
  width: 100%;

  transition: all 200ms;

  &:hover,
  &:focus {
    border: 1px solid ${color};
  }
`;

export default Input;