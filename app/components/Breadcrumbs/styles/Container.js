import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[60] : p.theme.grey[700]);

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${color};
  margin-bottom: 40px;
`;

export default Container;
