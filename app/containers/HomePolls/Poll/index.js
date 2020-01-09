/**
 *
 * HomePolls / Create
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import TextArea from 'components/TextArea';
import TextField from 'components/TextField';
import BlockTitle from 'components/BlockTitle';
import history from 'utils/history';
import { generatePathHomePollMovieCreate } from 'utils/paths';
import { dateToStringDashed } from 'utils/time';

import messages from './messages';
import Meta from './styles/Meta';
import Form from './styles/Form';
import Actions from './styles/Actions';
import Section from './styles/Section';
import Checkboxes from './styles/Checkboxes';
import Movies from './Movies';
import CreateMovie from './styles/CreateMovie';

const textAreaSize = {
  minHeight: 90,
  maxHeight: 200,
};

const actionStyle = {
  marginLeft: 10,
};

const getDay = date => {
  if (!date) {
    return '';
  }
  return dateToStringDashed(new Date(date));
};

const Poll = props => {
  const { poll, loading, onCreate, onUpdate, onCancel, intl } = props;
  const [title, setTitle] = useState(poll ? poll.title : '');
  const [description, setDescription] = useState(poll ? poll.description : '');
  const [userRequired, setUserRequired] = useState(false);
  const [allowComments, setAllowComments] = useState(false);
  const [allowMovieSuggestions, setAllowMovieSuggestions] = useState(false);
  const [opensAt, setOpensAt] = useState(poll ? getDay(poll.opensAt) : '');
  const [closesAt, setClosesAt] = useState(poll ? getDay(poll.closesAt) : '');
  const [community, setCommunity] = useState('');
  const [totalVotes, setTotalVotes] = useState(1);

  const onSubmit = e => {
    e.preventDefault();

    const newPoll = {
      title,
      description,
      userRequired,
      allowComments,
      allowMovieSuggestions,
      opensAt,
      closesAt,
      community,
      totalVotes,
    };

    if (poll) {
      onUpdate(newPoll);
      return;
    }
    onCreate(newPoll);
  };

  const goToCreateMovie = e => {
    e.preventDefault();
    history.push(generatePathHomePollMovieCreate(poll));
  };

  const isSubmitDisabled = () => {
    if (!title) {
      return true;
    }

    if (!description) {
      return true;
    }

    if (totalVotes <= 0) {
      return true;
    }

    return false;
  };

  const buttonMessage = poll ? messages.buttonUpdate : messages.buttonCreate;

  const titleMessage = poll ? messages.pollModify : messages.pollCreate;

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Section>
          <BlockTitle title={intl.formatMessage(titleMessage)} />
        </Section>

        <Section>
          <TextField
            title={intl.formatMessage(messages.formPollTitle)}
            disabled={loading}
            formnovalidate
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Section>

        <Section>
          <TextArea
            title={intl.formatMessage(messages.formPollDescription)}
            disabled={loading}
            style={textAreaSize}
            formnovalidate
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Checkboxes>
            <Checkbox
              label={intl.formatMessage(messages.userIsRequiredToVote)}
              checked={userRequired}
              onClick={() => setUserRequired(!userRequired)}
            />
            <Checkbox
              label={intl.formatMessage(messages.allowFeedBack)}
              checked={allowComments}
              onClick={() => setAllowComments(!allowComments)}
            />
            <Checkbox
              label={intl.formatMessage(messages.allowMovieSuggestions)}
              checked={allowMovieSuggestions}
              onClick={() => setAllowMovieSuggestions(!allowMovieSuggestions)}
            />
          </Checkboxes>

          <Meta>
            <TextField
              type="date"
              title={intl.formatMessage(messages.pollOpensAt)}
              value={opensAt}
              onChange={e => setOpensAt(e.target.value)}
            />
            <TextField
              type="date"
              title={intl.formatMessage(messages.pollClosesAt)}
              value={closesAt}
              onChange={e => setClosesAt(e.target.value)}
            />
            <TextField
              title={intl.formatMessage(messages.community)}
              value={community}
              onChange={e => setCommunity(e.target.value)}
            />
            <TextField
              title={intl.formatMessage(messages.totalVotes)}
              value={totalVotes}
              onChange={e => setTotalVotes(e.target.value)}
            />
          </Meta>
        </Section>

        <Section>
          <Actions>
            <Button onClick={onCancel} type="button" disabled={loading}>
              <FormattedMessage {...messages.cancel} />
            </Button>
            <Button
              style={actionStyle}
              disabled={isSubmitDisabled()}
              type="submit"
            >
              <FormattedMessage {...buttonMessage} />
            </Button>
          </Actions>
        </Section>
      </Form>
      {poll && (
        <>
          <Section>
            <BlockTitle title={intl.formatMessage(messages.formPollMovies)} />
          </Section>
          <Movies poll={poll} />
          <CreateMovie
            onClick={goToCreateMovie}
            href={generatePathHomePollMovieCreate(poll)}
          >
            <FormattedMessage {...messages.formPollMovieCreate} />
          </CreateMovie>
        </>
      )}
    </>
  );
};

Poll.propTypes = {
  poll: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired,
    opensAt: PropTypes.string.isRequired,
    closesAt: PropTypes.string.isRequired,
  }),
  onCreate: PropTypes.func,
  onUpdate: PropTypes.func,
  onCancel: PropTypes.func,
  loading: PropTypes.bool,
  intl: PropTypes.object,
};

export default injectIntl(Poll);
