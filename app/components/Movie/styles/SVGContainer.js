import styled from 'styled-components';

const SVGContainer = styled.div`
  display: inline;
  width: 10px;
  height: 10px;
  margin-left: 8px;

  & svg {
    ${props => props.rotated && 'transform: rotate(180deg);'}
    transition: transform 100ms;
    padding: 0;
    width: 12px;
    height: 20px;
  }
`;

export default SVGContainer;
