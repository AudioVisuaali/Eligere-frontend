import styled from 'styled-components';
import Button from 'components/Button';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[70] : p.theme.grey[700]);

const Action = styled(Button)`
  padding: 4px 8px;
  font-size: 10px;
  background-color: transparent;
  color: ${color};
`;

export default Action;
