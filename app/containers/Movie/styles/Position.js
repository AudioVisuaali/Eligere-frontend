import styled from 'styled-components';

const color = props =>
  props.theme.isDark ? props.theme.light[700] : props.theme.grey[700];
const colorHover = props =>
  props.theme.isDark ? '#fff' : props.theme.grey[700];

const Position = styled.span`
  position: absolute;
  line-height: 1;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-weight: 500;
  font-size: 18px;
  padding: 5px 10px 5px 15px;

  color: ${p => (p.focused ? colorHover : color)};

  transition: color 200ms;

  & label {
    margin-bottom: 2px;
    line-height: 1;
  }
`;

export default Position;
