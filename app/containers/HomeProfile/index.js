/**
 *
 * HomeProfile
 *
 */

import React from 'react';

import Container from './styles/Container';
import Profile from './Profile';
import Password from './Password';
import Sessions from './Sessions';
import LanguageAndTheme from './LanguageAndTheme';

const HomeProfile = () => (
  <Container>
    <Profile />

    <Password />

    <LanguageAndTheme />

    <Sessions />
  </Container>
);

export default HomeProfile;
