/**
 *
 * HomePolls / Create
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import TextField from 'components/TextField';

import messages from './messages';
import Section from './styles/Section';
import Container from './styles/Container';
import RestrictedTextArea from './styles/RestrictedTextArea';

const textAreaSize = {
  minHeight: 90,
  maxHeight: 260,
};

export const defaultCommunity = {
  title: '',
  description: '',
};

const Create = props => {
  const { intl, community, disableFields, onChange } = props;

  const handleFieldChange = e => {
    const newCommunity = {
      ...community,
      [e.target.name]: e.target.value,
    };

    if (!onChange) {
      return;
    }

    onChange(newCommunity);
  };

  return (
    <Container>
      <Section>
        <TextField
          name="title"
          title={intl.formatMessage(messages.formPollTitle)}
          disable={disableFields}
          formnovalidate
          value={community.title}
          onChange={handleFieldChange}
        />
      </Section>

      <Section>
        <RestrictedTextArea
          name="description"
          title={intl.formatMessage(messages.formPollDescription)}
          disable={disableFields}
          style={textAreaSize}
          formnovalidate // ??
          value={community.description}
          onChange={handleFieldChange}
        />
      </Section>
    </Container>
  );
};

Create.propTypes = {
  intl: PropTypes.object.isRequired,
  disableFields: PropTypes.bool,
  community: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func,
};

export default injectIntl(Create);
