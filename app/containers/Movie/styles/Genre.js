import styled from 'styled-components';
import Button from 'components/Button';

const Genre = styled(Button)`
  margin: 4px;
  padding: 4px 6px;
  font-size: 10px;
  border-radius: 12px;
  opacity: 0.4;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.7;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
    ${p => p.selected && `opacity: 1;`}
  }

  ${p => p.selected && `opacity: 1;`}
`;

export default Genre;
