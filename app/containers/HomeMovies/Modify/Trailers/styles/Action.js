import styled from 'styled-components';
import Button from 'components/Button';

const Action = styled(Button)`
  display: flex;
  align-items: center;

  & svg {
    height: 20px;
    width: 20px;
    margin-right: 4px;
  }
`;

export default Action;
