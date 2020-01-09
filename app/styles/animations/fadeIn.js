import { css, keyframes } from 'styled-components';

const fadeIn = css`
  ${keyframes`
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  `}
`;

export default fadeIn;
