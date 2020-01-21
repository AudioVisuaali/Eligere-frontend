import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles/Container';
import Title from './styles/Title';
import Select from './styles/Select';

const SelectComponent = props => {
  const { children: childrenProps, value, title, onChange } = props;

  const children = React.Children.map(childrenProps, child =>
    React.cloneElement(child, {}),
  );

  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Select hasTitle={title} value={value} onChange={handleChange}>
        {children}
      </Select>
    </Container>
  );
};

SelectComponent.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default SelectComponent;
