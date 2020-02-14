import styled from 'styled-components';

const color = p => (p.theme.isDark ? p.theme.whiteRGBA[60] : p.theme.grey[700]);

const colorChecked = p => (p.theme.isDark ? 'orange' : 'orange');

const Container = styled.span`
  padding: 9px;
  display: flex;
  position: relative;
  align-items: center;
  text-decoration: none;

  color: ${p => (p.checked ? colorChecked : color)};

  & svg {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
  }

  & label {
    cursor: pointer;
    display: inline;
    margin-left: 6px;
  }
`;

export default Container;
