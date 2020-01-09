import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[60] : p.theme.grey[700]);

const Label = styled.label`
  color: ${color};
  margin-bottom: 2px;
  display: block;
`;

export default Label;
