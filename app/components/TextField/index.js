/**
 *
 * TextField
 *
 */
import React, { forwardRef, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Container from './styles/Container';
import Title from './styles/Title';
import Input from './styles/Input';

const TextField = forwardRef((props, ref) => {
  const { title, disabled, focusOnMount, ...rest } = props;
  const inputRef = useRef(null);

  useEffect(() => {
    if (focusOnMount) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Container ref={ref} disabled={disabled}>
      <Title>{title}</Title>
      <Input ref={inputRef} disabled={disabled} hasTitle={title} {...rest} />
    </Container>
  );
});

TextField.propTypes = {
  disabled: PropTypes.bool,
  focusOnMount: PropTypes.bool,
  title: PropTypes.string,
};

export default TextField;
