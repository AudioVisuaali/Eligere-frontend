import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const buttonMaskBackground = p =>
  p.theme.isDark ? p.theme.light[50] : p.theme.darkRGBA[10];
const active = p => (p.theme.isDark ? p.theme.light[50] : p.theme.darkRGBA[10]);

const ButtonWrapper = styled.div`
  user-select: none;
  font-size: 14px;
  line-height: 1;
  display: inline-block;
  border: 1px solid;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  opacity: ${p => (p.theme.isDark ? 0.6 : 0.7)};
  color: ${p => (p.theme.isDark ? p.theme.light[50] : p.theme.grey[600])};
  text-align: center;
  margin-bottom: 0.6em;
  border-radius: 5px;

  transition: all 200ms ease-in-out;

  & .button__text {
    display: block;
    padding: 1em 2em;
    text-transform: uppercase;
    font-weight: 300;
  }

  &:hover .button__text {
    display: block;
    padding: 1em 2em;
    text-transform: uppercase;
    font-weight: bold;
    animation: fx-text 0.3s ease-out;
  }

  & .button__text:before {
    content: attr(title);
  }

  & .button__text--bis {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateX(-1em);
    opacity: 0;
  }

  & .button__mask {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${buttonMaskBackground};
    transform: translateX(-100%) rotate(45deg);
    transition: all 0.3s;
  }

  &:hover {
    opacity: 1;
  }

  &:hover .button__text--bis {
    animation: fx-text-bis 0.3s ease-out;
  }

  &:hover .button__mask {
    animation: fx-mask 0.3s ease-out;
  }

  &:active {
    opacity: 1;
    background: ${active};
    color: inherit;
  }

  @-webkit-keyframes fx-mask {
    0% {
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }

  @keyframes fx-mask {
    0% {
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }
  @-webkit-keyframes fx-text {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(1em);
      opacity: 0;
    }
  }
  @keyframes fx-text {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(1em);
      opacity: 0;
    }
  }
  @-webkit-keyframes fx-text-bis {
    0% {
      transform: translateX(-1em);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fx-text-bis {
    0% {
      transform: translateX(-1em);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

const Button = ({ children, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ButtonWrapper {...rest}>
    <span className="button__mask"></span>
    <span className="button__text">{children}</span>
    <span className="button__text button__text--bis">{children}</span>
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
