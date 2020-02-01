/**
 *
 * HomePolls / Create
 *
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { loadAndGotoPoll } from 'containers/HomePage/actions';
import { makeSelectPolls } from 'containers/App/selectors';
import PollCard from 'components/PollCard';
import BlockTitle from 'components/BlockTitle';
import PlusSVG from 'svgs/Plus';
import history from 'utils/history';
import { pathHomePolls, pathHomePollCreate, pathNotFound } from 'utils/paths';

import messages from './messages';
import Create from './Create';
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
    props.loadAndGotoPoll(poll.identifier);
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

      <Switch>
        <Route exact path={pathHomePolls} component={Polls} />
        <Route exact path={pathHomePollCreate} component={Create} />
        <Redirect to={pathNotFound} />
      </Switch>
    </>
  );
}

Polls.propTypes = {
  polls: PropTypes.array,
  loadAndGotoPoll: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  polls: makeSelectPolls(),
});

const mapDispatchToProps = dispatch => ({
  loadAndGotoPoll: evt => dispatch(loadAndGotoPoll(evt)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Polls);
