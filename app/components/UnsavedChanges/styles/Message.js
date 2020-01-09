import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[90] : p.theme.grey[700]);

const Message = styled.div`
  font-size: 12px;
  margin-left: 8px;
  color: ${color};
`;

export default Message;
