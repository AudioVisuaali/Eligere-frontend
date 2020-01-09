/**
 * A link to a certain page, an anchor tag
 */

import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  &:focus {
    color: inherit;
  }
`;

export default ({ ...rest }) => (
  <A target="_blank" rel="noopener noreferrer" {...rest} />
);
