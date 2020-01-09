import styled from 'styled-components';
import orange from 'styles/palettes/orange';

const Nav = styled.nav`
  height: 50px;
  margin: 0 auto;
  position: relative;
  background-color: ${orange[900]};
  z-index: 10;
  position: sticky;
  top: 0;

  &::after {
    content: ' ';
    position: absolute;
    right: 0;
    top: 100%;
    left: 0;
    height: 10px;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
  }
`;

export default Nav;
