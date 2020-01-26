import styled, { css } from 'styled-components';

const disabled = css`
  opacity: 0.6;
`;

const Container = styled.div`
  position: relative;

  ${p => p.disabled && disabled}
`;

export default Container;
