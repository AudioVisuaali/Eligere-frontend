import styled from 'styled-components';

const backgroundColor = p =>
  p.theme.isDark ? p.theme.dark[500] : p.theme.grey[700];

const Container = styled.article`
  margin-bottom: 20px;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  display: flex;
  background-color: ${backgroundColor};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  transition: box-shadow 200ms;

  &:hover {
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.3);

    & img {
      transform: scale(1.1);
    }
  }
`;

export default Container;
