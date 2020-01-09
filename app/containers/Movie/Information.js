import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import TextField from 'components/TextField';
import TextArea from 'components/TextArea';

import messages from './messages';
import Row from './styles/Row';
import Thumbnail from './styles/Thumbnail';
import Title from './styles/Title';
import Description from './styles/Description';
import Info from './styles/Info';

const Information = props => {
  const { intl } = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Row>
      <Thumbnail src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9" />
      <Info>
        <Title>
          <TextField
            title={intl.formatMessage(messages.movieTitle)}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Title>
        <Description>
          <TextArea
            title={intl.formatMessage(messages.movieDescription)}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </Description>
      </Info>
    </Row>
  );
};

Information.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(Information);
