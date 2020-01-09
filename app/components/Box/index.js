import styled from 'styled-components';
import orange from 'styles/palettes/orange';

const Box = styled.div`
  border-radius: 2px;
  background-color: ${orange[500]};
  width: ${props => props.size || props.width};
  height: ${props => props.size || props.height};

  box-shadow: rgba(0, 0, 0, 0.4) 2px 2px 4px;
`;

export default Box;
