import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[40] : p.theme.grey[500]);

const Actions = styled.div`
  display: flex;
  font-size: 10px;
  color: ${color};
`;

export default Actions;
