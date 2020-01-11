import styled from 'styled-components';
import device from 'styles/device';

const MetaField = styled.div`
  width: 16.666666%;

  @media screen and (${device.laptop}) {
    width: 50%;
  }
`;

export default MetaField;
