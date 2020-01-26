import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[60] : p.theme.grey[700]);

const Meta = styled.div`
  color: ${color};
  font-size: 10px;
`;

export default Meta;
