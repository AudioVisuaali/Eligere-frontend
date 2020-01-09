import styled from 'styled-components';

const getBackgroundGradient = theme => {
  const { dark, isDark, light } = theme;
  const start = isDark ? dark[200] : light[200];
  const end = isDark ? dark[700] : light[700];
  return `background-image: radial-gradient(${start}, ${end});`;
};

const BackgroundGradient = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => getBackgroundGradient(props.theme)};

  transition: opacity 200ms ease-in-out;

  opacity: ${props => (props.transparent ? '0' : '1')};
`;

export default BackgroundGradient;
