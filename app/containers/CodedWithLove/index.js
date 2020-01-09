import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import A from 'components/A';
import { injectIntl } from 'react-intl';

import messages from './messages';

const Wrapper = styled.h4`
  margin-top: 30px;
  color: ${props =>
    props.theme.isDark ? props.theme.whiteRGBA[60] : props.theme.grey[600]};
  text-align: center;
  font-weight: 400;
`;

const Coded = styled.span`
  font-weight: 500;
  color: rgba(3, 155, 229, 0.6);

  & a:hover {
    text-decoration: none;
  }
`;

const CodedLink = () => (
  <Coded>
    <A href="https://github.com/AudioVisuaali/"> {'</>'} </A>
  </Coded>
);

const CodedWithLove = ({ intl, ...rest }) => {
  const str = intl.formatMessage(messages.codedWithLove, {
    coded: <CodedLink />,
  });
  return <Wrapper {...rest}>{str}</Wrapper>;
};

CodedWithLove.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(CodedWithLove);
