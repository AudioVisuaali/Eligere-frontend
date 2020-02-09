/**
 *
 * TextField
 *
 */
import React, { forwardRef, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Container from './styles/Container';
import ErrorMessage from './styles/ErrorMessage';
import Title from './styles/Title';
import Input from './styles/Input';

const TextField = forwardRef((props, ref) => {
  const {
    children,
    title,
    className,
    error,
    disabled,
    focusOnMount,
    ...rest
  } = props;
  const inputRef = useRef(null);

  useEffect(() => {
    if (focusOnMount) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div style={{ marginBottom: 20 }}>
      <Container
        ref={ref}
        error={error}
        className={className}
        disabled={disabled}
      >
        <Title>{title}</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          ref={inputRef}
          error={error}
          disabled={disabled}
          hasTitle={title}
          {...rest}
        />
        {children}
      </Container>
    </div>
  );
});

TextField.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  focusOnMount: PropTypes.bool,
  error: PropTypes.node,
  title: PropTypes.string,
};

export default TextField;
