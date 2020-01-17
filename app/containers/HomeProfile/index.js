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
import Language from './Language';

const HomeProfile = () => (
  <Container>
    <DisplayName />

    <Password />

    <Language />

    <Sessions />
  </Container>
);

export default HomeProfile;
