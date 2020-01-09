import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChevronRightSVG from 'svgs/ChevronRight';
import ChevronLeftSVG from 'svgs/ChevronLeft';

import Circle from './styles/Circle';
import Content from './styles/Content';
import Container from './styles/Container';
import ButtonLeft from './styles/ButtonLeft';
import ButtonRight from './styles/ButtonRight';

const Scroller = props => {
  const { children, contentStyle } = props;
  const [offset, setOffset] = useState(0);
  const [isScrollable, setIsScrollable] = useState(true);
  const [maxOffsetOverFlow, setMaxOffsetOverFlow] = useState(false);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const onResize = () => handleOffset();
    contentRef.current.addEventListener('resize', onResize);
    handleOffset();

    return () => {
      contentRef.current.removeEventListener('resize', onResize);
    };
  }, []);

  const handleOffset = (moveBy = 0) => {
    const { width: contentWidth } = contentRef.current.getBoundingClientRect();
    const { width: wrapperWidth } = wrapperRef.current.getBoundingClientRect();

    let newOffset = offset + moveBy;
    // Underflow
    if (newOffset < 0) {
      newOffset = 0;
    }

    // Overflow
    const maxOffset = contentWidth - wrapperWidth;
    const maxOffsetOverflow = newOffset >= maxOffset;
    setMaxOffsetOverFlow(maxOffsetOverflow);
    if (maxOffsetOverflow) {
      newOffset = maxOffset;
    }

    setIsScrollable(contentWidth >= wrapperWidth);
    setOffset(newOffset);
  };

  const handleClickLeft = () => {
    const { width: wrapperWidth } = wrapperRef.current.getBoundingClientRect();
    handleOffset(-wrapperWidth);
  };

  const handleClickRight = () => {
    const { width: wrapperWidth } = wrapperRef.current.getBoundingClientRect();
    handleOffset(wrapperWidth);
  };

  const isAtStart = offset === 0;

  return (
    <Container ref={wrapperRef}>
      {isScrollable && !isAtStart && (
        <ButtonLeft onClick={handleClickLeft}>
          <Circle>
            <ChevronLeftSVG />
          </Circle>
        </ButtonLeft>
      )}
      <Content
        offseta={-parseInt(offset, 10)}
        ref={contentRef}
        style={contentStyle}
      >
        {children}
      </Content>
      {isScrollable && !maxOffsetOverFlow && (
        <ButtonRight onClick={handleClickRight}>
          <Circle>
            <ChevronRightSVG />
          </Circle>
        </ButtonRight>
      )}
    </Container>
  );
};

Scroller.propTypes = {
  children: PropTypes.node,
  contentStyle: PropTypes.object,
};

export default Scroller;
