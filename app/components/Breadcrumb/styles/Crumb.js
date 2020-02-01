import styled, { css } from 'styled-components';

const notDisabled = css`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const disabled = css`
  color: #eee;
  cursor: default;
`;

const Crumb = styled.a`
  display: flex;
  align-items: center;
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;

  & svg {
    flex-shrink: 0;
    height: 20px;
    width: 20px;
    padding-right: 5px;
  }

  ${p => (p.disabled ? disabled : notDisabled)}

  &:disabled:hover {
    text-decoration: none;
  }
`;

export default Crumb;
