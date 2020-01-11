import styled from 'styled-components';
import Button from 'components/Button';

const AddTrailer = styled(Button)`
  display: block;
  padding: 12px 0;
  width: 100%;
  border: 2px dashed rgba(255, 255, 255, 0.4);
  background-color: transparent;
  color: rgba(255, 255, 255, 0.6);

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.8);
  }
`;

export default AddTrailer;
