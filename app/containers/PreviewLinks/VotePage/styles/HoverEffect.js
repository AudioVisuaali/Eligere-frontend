import styled from 'styled-components';

const HoverEffect = styled.a`
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: opacity 200ms;
  will-change: opacity;

  &:hover {
    opacity: 0.8;
  }

  & svg {
    height: 20px;
    width: 20px;
  }
`;

export default HoverEffect;
