import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/Box';

import Header from './styles/Header';
import Head from './styles/Head';
import Title from './styles/Title';
import Action from './styles/Action';

export const BlockAction = Action;

const BlockTitle = props => {
  const { action, title } = props;
  return (
    <Header>
      <Head>
        <Box width="10px" />
        <Title>{title}</Title>
      </Head>
      {action}
    </Header>
  );
};

BlockTitle.propTypes = {
  action: PropTypes.node,
  title: PropTypes.node,
};

export default BlockTitle;
