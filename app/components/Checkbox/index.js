import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Label from 'components/Label';
import CheckSquareIconSVG from 'svgs/CheckSquareIcon';
import StopSVG from 'svgs/Stop';

import Input from './styles/Input';
import Container from './styles/Container';

const Checkbox = props => {
  const { checked, label, onClick, ...rest } = props;
  const [id] = useState(Math.random);
  return (
    <Container checked={checked}>
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
};

export default Checkbox;
