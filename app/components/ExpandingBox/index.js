import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from './styles/Container';
import Content from './styles/Content';

const ExpandingBox = props => {
  const { expanded, children, showAfterOpen } = props;
  const [height, setHeight] = useState(expanded ? 'auto' : 0);
  const [showContent, setShowContent] = useState(showAfterOpen || expanded);

  if (!showContent && expanded) {
    setShowContent(true);
  }

  const handleRef = ref => {
    if (!ref) {
      return;
    }
    const newHeight = ref.getBoundingClientRect().height;
    setHeight(newHeight);
  };

  const containerStyle = {
    height: expanded ? height : 0,
    opacity: expanded ? 1 : 0,
  };

  return (
    <Container allowPointerEvents={expanded} style={containerStyle}>
      <Content ref={handleRef}>{showContent && children}</Content>
    </Container>
  );
};

ExpandingBox.propTypes = {
  expanded: PropTypes.bool.isRequired,
  children: PropTypes.node,
  showAfterOpen: PropTypes.bool,
};

export default ExpandingBox;
