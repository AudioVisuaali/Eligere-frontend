import styled from 'styled-components';
import Button from 'components/Button';

const UrlAction = styled(Button)`
  flex-shrink: 0;
  padding: 6px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 15px;
    height: 15px;
  }
`;

export default UrlAction;
