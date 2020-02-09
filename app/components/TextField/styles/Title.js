import styled from 'styled-components';
import Label from 'components/Label';

const Title = styled(Label)`
  position: absolute;
  pointer-events: none;
  font-size: 10px;
  top: 6px;
  left: 11px;
  color: inherit;

  will-change: color;
  transition: color 200ms;
`;

export default Title;
