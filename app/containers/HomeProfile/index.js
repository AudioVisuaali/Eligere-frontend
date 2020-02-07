/**
 *
 * HomeProfile
 *
 */

import React from 'react';

import Container from './styles/Container';
import DisplayName from './DisplayName';
import Password from './Password';
import Sessions from './Sessions';
import LanguageAndTheme from './LanguageAndTheme';

const HomeProfile = () => (
  <Container>
    <DisplayName />

    <Password />

    <LanguageAndTheme />

    <Sessions />
  </Container>
);

export default HomeProfile;
