import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[90] : p.theme.grey[700]);

const Title = styled.div`
  color: ${color};
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Title;
