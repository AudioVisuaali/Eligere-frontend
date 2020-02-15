import styled from 'styled-components';

const Description = styled.div(props => ({
  color: props.theme.isDark ? props.theme.whiteRGBA[60] : props.theme.grey[700],
  marginLeft: 30,
}));

export default Description;
