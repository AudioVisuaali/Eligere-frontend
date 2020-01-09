/**
 *
 * TextArea
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles/Container';
import Title from './styles/Title';
import TextArea from './styles/TextArea';

const TextAreaInput = props => {
  const { title, ...rest } = props;
  return (
    <Container>
      <Title>{title}</Title>
      <TextArea {...rest} />
    </Container>
  );
};

TextAreaInput.propTypes = {
  title: PropTypes.string,
};

export default TextAreaInput;
