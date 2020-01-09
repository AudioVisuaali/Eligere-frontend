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

const HomeProfile = () => (
  <Container>
    <DisplayName />

    <Password />

    <Sessions />
  </Container>
);

export default HomeProfile;
