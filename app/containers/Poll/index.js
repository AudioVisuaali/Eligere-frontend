/**
 *
 * HomePolls / Create
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Label from 'components/Label';
import Checkbox from 'components/Checkbox';
import TextArea from 'components/TextArea';
import TextField from 'components/TextField';
import Select from 'components/Select';
import Option from 'components/Option';
import { makeSelectHomePageCommunities } from 'containers/HomePage/selectors';

import messages from './messages';
import Meta from './styles/Meta';
import Container from './styles/Container';
import Section from './styles/Section';
import Voting from './styles/Voting';

import MovieRecommendations from './styles/MovieRecommendations';

const textAreaSize = {
  minHeight: 90,
  maxHeight: 200,
};

const duplicationChecks = ['IP', 'COOKIE', 'USER'];

export const defaultPoll = {
  title: '',
  description: '',
  opensAt: '',
  closesAt: '',
  community: null,
  allowMovieSuggestions: true,
  requireUserForSuggesting: true,

  totalVotes: 1,
  voteDuplicationChecking: 'USER',
};

const Poll = props => {
  const { communities, poll, onChange, intl } = props;

  const handleChange = e => {
    onChange({
      ...poll,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeNumber = e => {
    onChange({
      ...poll,
      [e.target.name]: parseInt(e.target.value, 10),
    });
  };

  const handleChangeBoolean = e => {
    onChange({
      ...poll,
      [e.target.name]: e.target.checked,
    });
  };

  const handleChangeCommunity = e => {
    const { value } = e.target;
    const community = value ? { identifier: value } : null;
    const newPoll = {
      ...poll,
      community,
    };
    onChange(newPoll);
  };

  if (!poll) {
    return null;
  }

  const {
    title,
    description,
    opensAt,
    closesAt,
    community,
    allowMovieSuggestions,
    requireUserForSuggesting,
    totalVotes,
    voteDuplicationChecking,
  } = props.poll;

  return (
    <Container>
      <Section>
        <TextField
          name="title"
          title={intl.formatMessage(messages.formPollTitle)}
          formnovalidate
          value={title}
          onChange={handleChange}
        />
      </Section>

      <Section>
        <TextArea
          name="description"
          title={intl.formatMessage(messages.formPollDescription)}
          style={textAreaSize}
          formnovalidate
          value={description}
          onChange={handleChange}
        />

        <Meta>
          <TextField
            type="datetime-local"
            name="opensAt"
            title={intl.formatMessage(messages.pollOpensAt)}
            value={opensAt}
            onChange={handleChange}
          />
          <TextField
            type="datetime-local"
            name="closesAt"
            title={intl.formatMessage(messages.pollClosesAt)}
            value={closesAt}
            onChange={handleChange}
          />
          <Select
            name="community"
            title={intl.formatMessage(messages.community)}
            value={community ? community.identifier : ''}
            onChange={handleChangeCommunity}
          >
            <Option value="" />
            {communities &&
              communities.map(comm => (
                <Option key={comm.identifier} value={comm.identifier}>
                  {comm.title}
                </Option>
              ))}
          </Select>
        </Meta>
        <Label>Voting</Label>
        <Voting>
          <TextField
            name="totalVotes"
            type="number"
            min="1"
            max="999"
            title={intl.formatMessage(messages.totalVotes)}
            value={totalVotes}
            onChange={handleChangeNumber}
          />
          <Select
            name="voteDuplicationChecking"
            title={intl.formatMessage(messages.duplicationCheck)}
            value={voteDuplicationChecking || ''}
            onChange={handleChange}
          >
            {duplicationChecks.map(check => (
              <Option key={check} value={check}>
                {intl.formatMessage(messages[check])}
              </Option>
            ))}
          </Select>
        </Voting>
        <Label>Movie Recommendations</Label>
        <MovieRecommendations>
          <Checkbox
            name="allowMovieSuggestions"
            label={intl.formatMessage(messages.allowMovieSuggestions)}
            checked={allowMovieSuggestions}
            onClick={handleChangeBoolean}
          />
          <Checkbox
            name="requireUserForSuggesting"
            label={intl.formatMessage(messages.userIsRequiredToVote)}
            checked={requireUserForSuggesting}
            onClick={handleChangeBoolean}
          />
        </MovieRecommendations>
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
    community: PropTypes.object,
    totalVotes: PropTypes.number.isRequired,
    requireUserForSuggesting: PropTypes.bool,
    allowMovieSuggestions: PropTypes.bool,
    voteDuplicationChecking: PropTypes.string,
  }),
  communities: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      identifier: PropTypes.string.isRequired,
    }),
  ),
  onChange: PropTypes.func.isRequired,
  intl: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  communities: makeSelectHomePageCommunities(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, injectIntl)(Poll);
