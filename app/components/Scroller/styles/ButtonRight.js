import styled from 'styled-components';
import Button from 'components/Button';

const color = p => (p.theme.isDark ? p.theme.dark[900] : p.theme.whiteRGBA[60]);

const ButtonRight = styled(Button)`
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 10;
  padding: 15px;
  background-color: transparent;
  transform: translate(50%, -50%);

  &:hover {
    background-color: transparent;
    & > div {
      background-color: rgba(255, 255, 255, 9);
    }
  }

  & svg {
    color: ${color};
    width: 16px;
    height: 16px;
  }
`;

export default ButtonRight;
