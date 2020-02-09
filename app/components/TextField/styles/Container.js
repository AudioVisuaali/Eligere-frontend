import styled, { css } from 'styled-components';

const disabled = css`
  opacity: 0.6;
`;

const color = props => {
  if (props.error) {
    return props.theme.red[500];
  }

  return props.theme.isDark ? props.theme.whiteRGBA[60] : props.theme.grey[700];
};

const Container = styled.div`
  position: relative;

  ${p => p.disabled && disabled}

  color: ${color};
`;

export default Container;
