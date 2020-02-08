import styled from 'styled-components';

const color = props => (props.theme.isDark ? '#fff' : props.theme.grey[700]);

const ChevronContainer = styled.div`
  pointer-events: none;

  & svg {
    color: ${color};
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 10px;
    height: 10px;
  }
`;

export default ChevronContainer;
