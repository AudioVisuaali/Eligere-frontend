import { css, keyframes } from 'styled-components';

const spin = css`
  ${keyframes`
    0% {
      opacity: 1;
    }

    100% {
        transform: rotate(360deg);
    }
  `}
`;

export default spin;
