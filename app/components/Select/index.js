import React from 'react';
import PropTypes from 'prop-types';

import ChevronDownSVG from 'svgs/ChevronDown';

import Container from './styles/Container';
import ChevronContainer from './styles/ChevronContainer';
import Title from './styles/Title';
import Select from './styles/Select';

const SelectComponent = props => {
  const { children, value, title, onChange, ...rest } = props;

  return (
    <div>
      <Container>
        <Title>{title}</Title>
        <Select hasTitle={title} value={value} onChange={onChange} {...rest}>
          {children}
        </Select>
        <ChevronContainer>
          <ChevronDownSVG />
        </ChevronContainer>
      </Container>
    </div>
  );
};

SelectComponent.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default SelectComponent;
