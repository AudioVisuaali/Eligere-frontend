/**
 *
 * HomePolls / Create
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from 'components/Button';
import TextArea from 'components/TextArea';
import TextField from 'components/TextField';
import BlockTitle from 'components/BlockTitle';

import messages from './messages';
import Form from './styles/Form';
import Actions from './styles/Actions';
import Section from './styles/Section';

const textAreaSize = {
  minHeight: 90,
  maxHeight: 200,
};

const actionStyle = {
  marginLeft: 10,
};

const Create = props => {
  const { community, loading, onCreate, onUpdate, onCancel } = props;
  const [title, setTitle] = useState(community ? community.title : '');
  const [description, setDescription] = useState(
    community ? community.description : '',
  );

  const onSubmit = e => {
    e.preventDefault();
    if (community) {
      onUpdate({
        ...community,
        title,
        description,
      });
      return;
    }
    onCreate({
      title,
      description,
    });
  };

  const isTextChanged = () => {
    if (!community) {
      return false;
    }

    return title === community.title && description === community.description;
  };

  const buttonMessage = community
    ? messages.buttonUpdate
    : messages.buttonCreate;
  const titleMessage = community ? messages.titleModify : messages.titleCreate;

  const disableSubmit = !(title, description) || loading || isTextChanged();

  return (
    <Form onSubmit={onSubmit}>
      <Section>
        <BlockTitle title={<FormattedMessage {...titleMessage} />} />
      </Section>

      <Section>
        <TextField
          title={<FormattedMessage {...messages.formPollTitle} />}
          disabled={loading}
          formnovalidate
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </Section>

      <Section>
        <TextArea
          title={<FormattedMessage {...messages.formPollDescription} />}
          disabled={loading}
          style={textAreaSize}
          formnovalidate
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </Section>

      <Section>
        <Actions>
          <Button onClick={onCancel} type="button" disabled={loading}>
            <FormattedMessage {...messages.cancel} />
          </Button>
          <Button style={actionStyle} disabled={disableSubmit} type="submit">
            <FormattedMessage {...buttonMessage} />
          </Button>
        </Actions>
      </Section>
    </Form>
  );
};

Create.propTypes = {
  community: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  onCreate: PropTypes.func,
  onUpdate: PropTypes.func,
  onCancel: PropTypes.func,
  loading: PropTypes.bool,
};

export default Create;
