import styled from 'styled-components';
import Button from 'components/Button';

const backgroundColor = p =>
  p.theme.isDark ? p.theme.dark[500] : p.theme.grey[700];

const ButtonImage = styled(Button)`
  border-radius: 0;
  border: none;
  padding: 0;
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

export default ButtonImage;
