import styled, { css } from 'styled-components';

const centered = css`
  justify-content: center;
  margin-left: 10px;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 6px 0;

  ${props => props.centered && centered};
`;

export default Select;
