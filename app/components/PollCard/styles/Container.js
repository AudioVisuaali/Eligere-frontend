import styled from 'styled-components';
import A from 'components/A';

const backgroundColor = p =>
  p.theme.isDark ? p.theme.dark[500] : p.theme.grey[700];

const Container = styled(A)`
  border: none;
  text-align: left;
  margin-bottom: 20px;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  display: flex;
  cursor: pointer;
  background-color: ${backgroundColor};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  transition: box-shadow 200ms;

  &:hover {
    text-decoration: none;
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.3);

    & img {
      transform: scale(1.1);
    }
  }
`;

export default Container;
