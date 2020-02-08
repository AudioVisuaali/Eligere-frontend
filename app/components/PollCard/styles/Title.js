import styled from 'styled-components';

const color = p =>
  p.theme.isDark ? p.theme.whiteRGBA[100] : p.theme.grey[700];

const Title = styled.label`
  display: block;
  font-size: 20px;
  margin: 0 0 4px 0;
  font-weight: 500;
  color: ${color};
`;

export default Title;
