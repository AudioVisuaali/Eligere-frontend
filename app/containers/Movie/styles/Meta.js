import styled from 'styled-components';
import device from 'styles/device';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;

  & > * {
    padding-right: 15px;
    padding-bottom: 15px;

    &:last-child {
      padding-right: 0;
    }
  }

  @media screen and (${device.laptop}) {
    & > * :nth-child(4) {
      padding-right: 0;
    }
  }
`;

export default Container;
