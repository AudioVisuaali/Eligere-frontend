/**
 *
 * HomePolls / Create
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import TextArea from 'components/TextArea';
import TextField from 'components/TextField';
import BlockTitle from 'components/BlockTitle';
import { dateToStringDashed } from 'utils/time';

import messages from './messages';
import Meta from './styles/Meta';
import Container from './styles/Container';
import Section from './styles/Section';
import Checkboxes from './styles/Checkboxes';
import Actions from './styles/Actions';

const textAreaSize = {
  minHeight: 90,
  maxHeight: 200,
};

const getDay = date => {
  if (!date) {
    return '';
  }
  return dateToStringDashed(new Date(date));
};

const Poll = props => {
  const { poll, loading, onPoll, intl } = props;
  const [title, setTitle] = useState(poll ? poll.title : '');
  const [description, setDescription] = useState(poll ? poll.description : '');
  const [userRequired, setUserRequired] = useState(
    poll ? poll.userRequired : false,
  );
  const [allowComments, setAllowComments] = useState(
    poll ? poll.allowComments : false,
  );
  const [allowMovieSuggestions, setAllowMovieSuggestions] = useState(
    poll ? poll.allowMovieSuggestions : false,
  );
  const [opensAt, setOpensAt] = useState(poll ? getDay(poll.opensAt) : '');
  const [closesAt, setClosesAt] = useState(poll ? getDay(poll.closesAt) : '');
  const [community, setCommunity] = useState(poll ? poll.community : '');
  const [totalVotes, setTotalVotes] = useState(1);

  const createPoll = () => ({
    title,
    description,
    userRequired,
    allowComments,
    allowMovieSuggestions,
    opensAt: opensAt || null,
    closesAt: closesAt || null,
    community,
    totalVotes,
  });

  useEffect(() => {
    onPoll(createPoll(), allowSubmit());
  }, [
    title,
    description,
    userRequired,
    allowComments,
    allowMovieSuggestions,
    opensAt,
    closesAt,
    community,
    totalVotes,
  ]);

  const pollMatch = () => {
    if (poll.title !== title) return true;
    if (poll.description !== description) return true;
    if (poll.userRequired !== userRequired) return true;
    // TODO
    // if (originalPoll.opensAt !== opensAt) return true;
    // if (originalPoll.closesAt !== closesAt) return true;
    if (poll.community !== community) return true;
    if (poll.allowComments !== allowComments) return true;
    if (poll.totalVotes !== totalVotes) return true;
    if (poll.allowMovieSuggestions !== allowMovieSuggestions) return true;

    return false;
  };

  const allowSubmit = () => {
    if (!title) {
      return false;
    }

    if (!description) {
      return false;
    }

    if (totalVotes < 0) {
      return false;
    }

    if (poll) {
      return pollMatch();
    }

    return true;
  };

  const pollTitleMessage = poll ? messages.pollModify : messages.pollCreate;

  return (
    <Container>
      <Section>
        <BlockTitle title={intl.formatMessage(pollTitleMessage)} />
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
    </Container>
  );
};

Poll.propTypes = {
  poll: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired,
    opensAt: PropTypes.string,
    closesAt: PropTypes.string,
    community: PropTypes.string,
    totalVotes: PropTypes.number.isRequired,
    userRequired: PropTypes.bool,
    allowComments: PropTypes.bool,
    allowMovieSuggestions: PropTypes.bool,
  }),
  onPoll: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  intl: PropTypes.object,
};

export default injectIntl(Poll);
