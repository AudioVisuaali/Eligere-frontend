import styled from 'styled-components';

const backgroundColor = p =>
  p.theme.isDark ? p.theme.dark[500] : p.theme.grey[700];

const ThumbnailFade = styled.div`
  position: relative;

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 20px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), ${backgroundColor});
  }
`;

export default ThumbnailFade;
