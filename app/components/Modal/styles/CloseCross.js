import styled from 'styled-components';

const hoverBackgroundColor = p =>
  p.theme.isDark ? p.theme.darkRGBA[40] : p.theme.darkRGBA[10];

const CloseCross = styled.button`
  border: none;
  background-color: transparent;
  width: 24px;
  height: 24px;
  position: absolute;
  right: 22px;
  top: 22px;
  transform: scale(1);
  border-radius: 100%;
  padding: 0;
  margin: 0;

  transition: transform 200ms ease-out;

  &:hover {
    transform: scale(1.2);
    background-color: ${hoverBackgroundColor};
  }

  & svg {
    width: 18px;
    height: 18px;
    color: ${p => (p.theme.isDark ? p.theme.light[50] : p.theme.dark[700])};
  }
`;

export default CloseCross;
