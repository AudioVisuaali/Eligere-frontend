import styled from 'styled-components';
import device from 'styles/device';

const RateField = styled.div`
  width: 16.666666%;

  @media screen and (${device.laptop}) {
    width: 25%;
  }
`;

export default RateField;
