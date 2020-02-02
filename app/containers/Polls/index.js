/**
 *
 * HomePolls / Create
 *
 */
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { loadAndGotoPoll, loadAndGotoPolls } from 'containers/HomePage/actions';
import { makeSelectHomePagePolls } from 'containers/HomePage/selectors';
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

  useEffect(() => {
    if (!props.polls) {
      props.loadAndGotoPolls(false);
    }
  }, []);

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
        <Route exact path={pathHomePolls} />
        <Route exact path={pathHomePollCreate} component={Create} />
        <Redirect to={pathNotFound} />
      </Switch>
    </>
  );
}

Polls.propTypes = {
  polls: PropTypes.array,
  loadAndGotoPoll: PropTypes.func,
  loadAndGotoPolls: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  polls: makeSelectHomePagePolls(),
});

const mapDispatchToProps = dispatch => ({
  loadAndGotoPoll: evt => dispatch(loadAndGotoPoll(evt)),
  loadAndGotoPolls: evt => dispatch(loadAndGotoPolls(evt)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Polls);
