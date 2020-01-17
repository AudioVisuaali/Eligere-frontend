/**
 *
 * HomePolls / Create
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectPolls } from 'containers/App/selectors';
import PollCard from 'components/PollCard';
import BlockTitle from 'components/BlockTitle';
import PlusSVG from 'svgs/Plus';
import { pathHomePollCreate, generatePathHomePoll } from 'utils/paths';
import history from 'utils/history';

import messages from './messages';
import Action from './styles/Action';

const handleCreateNew = () => {
  history.push(pathHomePollCreate);
};

function createPollButton() {
  return (
    <Action onClick={handleCreateNew}>
      <PlusSVG />
      <FormattedMessage {...messages.buttonPollCreate} />
    </Action>
  );
}

function Polls(props) {
  const { polls } = props;

  const handleEdit = poll => {
    history.push(generatePathHomePoll(poll));
  };

  if (!polls) {
    return null;
  }

  if (!polls.length) {
    return 'no polls';
  }

  return (
    <>
      <BlockTitle
        title={<FormattedMessage {...messages.pollsTitle} />}
        action={createPollButton()}
      />
      {polls.map(poll => (
        <PollCard
          key={poll.identifier}
          onEdit={() => handleEdit(poll)}
          poll={poll}
        />
      ))}
    </>
  );
}

Polls.propTypes = {
  polls: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  polls: makeSelectPolls(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(Polls);
