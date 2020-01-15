import styled from 'styled-components';
import device from 'styles/device';

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    margin-bottom: 20px;
    width: 25%;
    height: 200px;
  }

  & > div:nth-child(4n + 1) {
    padding-right: 10px;
  }

  & > div:nth-child(4n + 2),
  & > div:nth-child(4n + 3) {
    padding: 0 10px;
  }

  & > div:nth-child(4n + 4) {
    padding-left: 10px;
  }

  @media screen and (${device.tablet}) {
    & > div {
      margin-bottom: 20px;
      width: 33.333%;
      height: 200px;
    }

    & > div:nth-child(3n + 1) {
      padding-right: 10px;
    }

    & > div:nth-child(3n + 2) {
      padding: 0 10px;
    }

    & > div:nth-child(3n + 3) {
      padding-left: 10px;
    }
  }

  @media screen and (${device.mobileL}) {
    & > div {
      margin-bottom: 20px;
      width: 50%;
      height: 200px;
    }

    & > div:nth-child(2n + 1) {
      padding-right: 10px;
    }

    & > div:nth-child(2n + 2) {
      padding-left: 10px;
    }
  }

  @media screen and (${device.mobileM}) {
    & > div {
      margin-bottom: 20px;
      width: 100%;
      height: 200px;
    }

    & > div:nth-child(2n + 1) {
      padding: 0;
    }

    & > div:nth-child(2n + 2) {
      padding: 0;
    }
  }
`;

export default MoviesContainer;
