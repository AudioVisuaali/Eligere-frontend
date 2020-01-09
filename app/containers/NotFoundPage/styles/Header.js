import styled from 'styled-components';
import device from 'styles/device';

const Header = styled.div`
  color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;

  & svg {
    color: #454545;
    width: 80px;
    margin-right: 30px;
  }

  @media screen and (${device.tablet}) {
    & svg {
      display: none;
    }
  }
`;

export default Header;
