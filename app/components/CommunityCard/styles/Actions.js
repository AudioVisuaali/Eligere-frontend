import styled from 'styled-components';

const color = p =>
  p.theme.isDark ? p.theme.whiteRGBA[100] : p.theme.grey[700];

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Actions;
