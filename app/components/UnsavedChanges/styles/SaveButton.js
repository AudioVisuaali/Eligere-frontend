import styled from 'styled-components';
import Button from 'components/Button';

const SaveButton = styled(Button)`
  background-color: #42a851;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 3px;

  &:hover {
    background-color: #358741;
  }
`;

export default SaveButton;
