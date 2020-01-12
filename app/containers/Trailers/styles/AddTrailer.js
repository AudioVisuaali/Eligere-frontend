import styled from 'styled-components';
import Button from 'components/Button';

const AddTrailer = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  width: 100%;
  border: 2px dashed rgba(255, 255, 255, 0.4);
  background-color: transparent;
  color: rgba(255, 255, 255, 0.6);

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.8);
  }

  & svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

export default AddTrailer;
