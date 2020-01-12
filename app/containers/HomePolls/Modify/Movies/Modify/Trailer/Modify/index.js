import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { gql } from 'apollo-boost';
import { compose } from 'redux';
import { connect } from 'react-redux';

import apolloClient from 'apolloClient';
import Modal from 'components/Modal';
import Trailer from 'containers/Trailer';
import { getMocks, generatePathHomePollMovieModify } from 'utils/paths';
import history from 'utils/history';

import { trailerModify } from '../../../../actions';
import messages from './messages';

const TRAILER_GET = gql`
  query($identifier: String!) {
    trailer(identifier: $identifier) {
      identifier
      platform
      url
      slug
      thumbnailURL
      title
    }
  }
`;

const TRAILER_UPDATE = gql`
  mutation($identifier: String!, $url: String!) {
    updateTrailer(identifier: $identifier, url: $url) {
      identifier
      platform
      url
      slug
      thumbnailURL
      title
    }
  }
`;

const TrailerModify = props => {
  const [loaded, setLoaded] = useState(false);
  const [originalTrailer, setOriginalTrailer] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const { trailerIdentifier } = props.match.params;

    apolloClient
      .query({
        query: TRAILER_GET,
        variables: { identifier: trailerIdentifier },
      })
      .then(res => {
        setTrailer(res.data.trailer.url);
        setOriginalTrailer(res.data.trailer);
      })
      .catch(console.log)
      .finally(() => setLoaded(true));
  }, []);

  const handleUpdate = () => {
    const { trailerIdentifier } = props.match.params;
    apolloClient
      .mutate({
        mutation: TRAILER_UPDATE,
        variables: { identifier: trailerIdentifier, url: trailer },
      })
      .then(res => {
        props.trailerModify(res.data.updateTrailer);
      })
      .catch(console.log);
  };

  const handleClose = () => {
    const { poll, movie } = getMocks(props.match);
    history.push(generatePathHomePollMovieModify(poll, movie));
  };

  const allowUpdate = () => {
    if (!trailer) {
      return false;
    }

    if (originalTrailer.url === trailer) {
      return false;
    }

    return true;
  };

  if (!loaded) {
    return null;
  }

  if (!originalTrailer) {
    return 'trailer does not exist';
  }

  return (
    <Modal
      title={props.intl.formatMessage(messages.modifyTrailer)}
      maxWidth={600}
      onClose={handleClose}
      disableAccept={!allowUpdate()}
      onAccept={handleUpdate}
    >
      <Trailer onChange={setTrailer} trailer={originalTrailer} />
    </Modal>
  );
};

TrailerModify.propTypes = {
  match: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  trailerModify: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  trailerModify: movie => dispatch(trailerModify(movie)),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  injectIntl,
  withConnect,
  withRouter,
)(TrailerModify);
