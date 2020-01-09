import styled from 'styled-components';
import A from 'components/A';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[60] : p.theme.grey[700]);

const Link = styled(A)`
  text-decoration: none;
  display: block;
  width: 100%;
  color: ${color};
  font-size: 21px;
  font-weight: bold;
  line-height: 1.3em;
  border-radius: 10px;
  font-weight: normal;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border: 2px dashed rgba(0, 0, 0, 0.3);

  transition: background-color 200ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    text-decoration: none;
  }

  &:focus {
    color: ${color};
    text-decoration: none;
  }
`;

export default Link;
