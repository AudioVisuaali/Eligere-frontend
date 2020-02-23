import styled from 'styled-components';

const SVGContainer = styled.div`
  display: flex;
  align-items: center;

  & svg {
    ${props => props.rotated && 'transform: rotate(180deg);'}
    transition: transform 100ms;
    margin-left: 8px;
    padding: 0;
    width: 12px;
  }
`;

export default SVGContainer;
