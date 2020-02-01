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

import Checkbox from 'components/Checkbox';
import TextArea from 'components/TextArea';
import TextField from 'components/TextField';
import Select from 'components/Select';
import Option from 'components/Option';
import { makeSelectCommunities } from 'containers/App/selectors';

import messages from './messages';
import Meta from './styles/Meta';
import Container from './styles/Container';
import Section from './styles/Section';
import Checkboxes from './styles/Checkboxes';

const textAreaSize = {
  minHeight: 90,
  maxHeight: 200,
};

export const defaultPoll = {
  title: '',
  description: '',
  userRequired: false,
  allowComments: false,
  allowMovieSuggestions: true,
  opensAt: '',
  closesAt: '',
  totalVotes: 1,
  community: null,
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
    userRequired,
    allowComments,
    allowMovieSuggestions,
    opensAt,
    closesAt,
    community,
    totalVotes,
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

        <Checkboxes>
          <Checkbox
            name="userRequired"
            label={intl.formatMessage(messages.userIsRequiredToVote)}
            checked={userRequired}
            onClick={handleChangeBoolean}
          />
          <Checkbox
            name="allowComments"
            label={intl.formatMessage(messages.allowFeedBack)}
            checked={allowComments}
            onClick={handleChangeBoolean}
          />
          <Checkbox
            name="allowMovieSuggestions"
            label={intl.formatMessage(messages.allowMovieSuggestions)}
            checked={allowMovieSuggestions}
            onClick={handleChangeBoolean}
          />
        </Checkboxes>

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
          <TextField
            name="totalVotes"
            type="number"
            min="1"
            max="999"
            title={intl.formatMessage(messages.totalVotes)}
            value={totalVotes}
            onChange={handleChangeNumber}
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
    community: PropTypes.object,
    totalVotes: PropTypes.number.isRequired,
    userRequired: PropTypes.bool,
    allowComments: PropTypes.bool,
    allowMovieSuggestions: PropTypes.bool,
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
  communities: makeSelectCommunities(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, injectIntl)(Poll);
