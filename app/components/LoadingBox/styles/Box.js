import styled from 'styled-components';

const Box = styled.div`
  display: block;
  height: 1em;
  position: relative;
  overflow: hidden;
  background-color: #424242;
  border-radius: 6px;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(22, 22, 22, 0) 0,
      rgba(22, 22, 22, 0.1) 20%,
      rgba(22, 22, 22, 0.4) 60%,
      rgba(22, 22, 22, 0)
    );
    animation: shimmer 2s infinite;
    content: '';
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

export default Box;
