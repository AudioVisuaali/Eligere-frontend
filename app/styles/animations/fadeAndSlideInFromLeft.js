import { css, keyframes } from 'styled-components';

const fadeAndSlideInFromLeft = css`
  ${keyframes`
    0% {
      opacity: 0;
      transform: translateX(-0.5em);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  `}
`;

export default fadeAndSlideInFromLeft;
