import styled from 'styled-components';
import A from 'components/A';
import { buttonStyle } from 'components/Button';

const Action = styled(A)(props => ({
  ...buttonStyle(props),
  display: 'flex',
  alignItems: 'center',

  '& svg': {
    height: 20,
    width: 20,
    marginRight: 4,
  },
}));

export default Action;
