import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[70] : p.theme.grey[700]);

const Description = styled.label`
  font-size: 12px;
  margin: 0 0 10px 0;
  font-weight: 500;
  color: ${color};
  flex-grow: 1;
  cursor: pointer;
`;

export default Description;
