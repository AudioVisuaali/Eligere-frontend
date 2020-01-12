import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Container from './styles/Container';

const RatioContainer = props => {
  const { ratio, children, style, ...rest } = props;
  const [height, setHeight] = useState('auto');
  const elem = useRef(null);

  useEffect(() => {
    const onResize = () => {
      const { width } = elem.current.getBoundingClientRect();
      setHeight(width / ratio);
    };

    elem.current.addEventListener('resize', onResize);
    onResize();

    return () => {
      elem.current.removeEventListener('resize', onResize);
    };
  }, []);

  const containerStyle = {
    height,
    ...style,
  };

  return (
    <Container ref={elem} style={containerStyle} {...rest}>
      {children}
    </Container>
  );
};

RatioContainer.propTypes = {
  children: PropTypes.node.isRequired,
  ratio: PropTypes.number,
  style: PropTypes.object,
};

export default RatioContainer;
