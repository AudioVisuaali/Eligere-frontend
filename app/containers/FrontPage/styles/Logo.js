import styled from 'styled-components';

const Logo = styled.h2`
  font-size: 60px;
  font-weight: 300;
  color: ${props =>
    props.theme.isDark ? props.theme.light[50] : props.theme.grey[800]};
  text-align: center;
  margin: 0 0 0.1em 0;
`;

export default Logo;
