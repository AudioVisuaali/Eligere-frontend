import { createGlobalStyle } from 'styled-components';

const backgroundColor = props =>
  props.theme.isDark ? props.theme.dark[200] : props.theme.grey[200];

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${props => backgroundColor(props)};
  }

  body {
    min-height: 100vh;
    font-family: 'Titillium Web', Helvetica, Arial, sans-serif;
    background-color: ${props => backgroundColor(props)};
    background-image: linear-gradient(347deg, rgb(28, 28, 28) 0%, rgb(40, 40, 40) 100%);
  }

  body.fontLoaded {
    font-family: 'Titillium Web', Helvetica, Arial, sans-serif;
  }

  button {
    font-family: inherit;
    
    &:hover {
      cursor: pointer;
    }
  }

  * {
    margin: 0px;
    padding: 0px;
  }

  *:focus {
    color: #fff;
    outline-width: 0;
  }
`;

export default GlobalStyle;
