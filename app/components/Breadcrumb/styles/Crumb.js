import styled from 'styled-components';

const Crumb = styled.a`
  display: flex;
  align-items: center;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & svg {
    flex-shrink: 0;
    height: 20px;
    width: 20px;
    padding-right: 5px;
  }
`;

export default Crumb;
