/**
 *
 * TextField
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles/Container';
import Title from './styles/Title';
import Input from './styles/Input';

const TextField = props => {
  const { title, ...rest } = props;
  return (
    <Container>
      <Title>{title}</Title>
      <Input hasTitle={title} {...rest} />
    </Container>
  );
};

TextField.propTypes = {
  title: PropTypes.string,
};

export default TextField;
