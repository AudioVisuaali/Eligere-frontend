import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CheckSquareIconSVG from 'svgs/CheckSquareIcon';
import StopSVG from 'svgs/Stop';

import Label from './styles/Label';
import Input from './styles/Input';
import Container from './styles/Container';

const Checkbox = props => {
  const { style, className, checked, label, onClick, ...rest } = props;
  const [id] = useState(Math.random);
  return (
    <Container style={style} className={className} checked={checked}>
      <Input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onClick}
        {...rest}
      />
      {checked ? <CheckSquareIconSVG /> : <StopSVG />}
      {label && <Label htmlFor={id}>{label}</Label>}
    </Container>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Checkbox;
