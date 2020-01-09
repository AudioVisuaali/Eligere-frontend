/**
 *
 * ThemeSwitch
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Names from './styles/Names';
import Light from './styles/Light';
import Dark from './styles/Dark';

import Wrapper from './styles/Wrapper';
import Toggle from './styles/Toggle';

function ThemeSwitch({ active, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <Toggle active={active}></Toggle>
      <Names>
        <Light active={!active}>
          <FormattedMessage {...messages.light} />
        </Light>
        <Dark active={active}>
          <FormattedMessage {...messages.dark} />
        </Dark>
      </Names>
    </Wrapper>
  );
}

ThemeSwitch.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ThemeSwitch;
