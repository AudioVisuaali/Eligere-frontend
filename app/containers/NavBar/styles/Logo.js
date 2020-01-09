import styled from 'styled-components';

const color = p =>
  p.theme.isDark ? p.theme.whiteRGBA[100] : p.theme.grey[700];

const Logo = styled.a`
  font-size: 24px;
  color: ${color};
  transition: transform 200ms;
  user-select: none;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    cursor: pointer;
    transform: translateX(4px);
  }
`;

export default Logo;
