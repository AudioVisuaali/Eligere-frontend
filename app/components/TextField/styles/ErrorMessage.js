import styled from 'styled-components';
import Label from 'components/Label';

const ErrorMessage = styled(Label)`
  position: absolute;
  font-size: 9px;
  top: 100%;
  left: 11px;
  margin-top: 2px;
  color: inherit;
`;

export default ErrorMessage;
