import styled from 'styled-components';

const borderColor = props =>
  props.theme.isDark ? props.theme.light[700] : props.theme.grey[700];
const color = props => (props.theme.isDark ? '#fff' : props.theme.grey[700]);

const TextArea = styled.textarea`
  background-color: transparent;
  border: 1px solid ${borderColor};
  color: ${color};
  padding: 12px 10px 8px;
  padding-top: 22px;
  border-radius: 4px;
  width: 100%;
  font-family: inherit;

  transition: border 200ms;

  &:hover,
  &:focus {
    border: 1px solid ${color};
  }
`;

export default TextArea;
