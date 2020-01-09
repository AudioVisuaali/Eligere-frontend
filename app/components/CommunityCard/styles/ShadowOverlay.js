import styled from 'styled-components';

const backgroundColor = p =>
  p.theme.isDark ? p.theme.dark[500] : p.theme.grey[700];

const ShadowOverlay = styled.div`
  height: 100%;
  position: relative;

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

export default ShadowOverlay;
