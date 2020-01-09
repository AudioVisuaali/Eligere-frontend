import styled from 'styled-components';

const Description = styled.div`
  text-align: center;
  color: ${p => (p.theme.isDark ? p.theme.whiteRGBA[60] : p.theme.grey[700])};
  font-weight: 400;
  font-size: 16px;
  height: 80px;
`;

export default Description;
