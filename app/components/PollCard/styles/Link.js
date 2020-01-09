import styled from 'styled-components';
import A from 'components/A';

const backgroundColor = p =>
  p.theme.isDark ? p.theme.dark[500] : p.theme.grey[700];

const Link = styled(A)`
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), ${backgroundColor});
  }
`;

export default Link;
