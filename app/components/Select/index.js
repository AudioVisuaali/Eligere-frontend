import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles/Container';
import Title from './styles/Title';
import Select from './styles/Select';

const SelectComponent = props => {
  const { children: childrenProps, value, title, onChange, ...rest } = props;

  const children = React.Children.map(childrenProps, child =>
    React.cloneElement(child, {}),
  );

  return (
    <Container>
      <Title>{title}</Title>
      <Select hasTitle={title} value={value} onChange={onChange} {...rest}>
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
