import styled from 'styled-components';
import A from 'components/A';

const color = p =>
  p.theme.isDark ? p.theme.whiteRGBA[100] : p.theme.grey[700];

const Title = styled(A)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  display: block;
  padding: 10px;
  font-size: 12px;
  color: ${color};
`;

export default Title;
