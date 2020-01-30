import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { compose } from 'redux';

import apolloClient from 'apolloClient';
import { getVideoSlug } from 'utils/video';
import PlusSVG from 'svgs/Plus';
import BlockTitle from 'components/BlockTitle';
import Trailer from 'containers/Trailer';
import Modal from 'components/Modal';

import { makeSelectHomeMovie } from '../selectors';
import { trailerAdd, trailerUpdate } from '../actions';
import TrailerCard from './TrailerCard';
import messages from './messages';
import Action from './styles/Action';
import NoTrailers from './styles/NoTrailers';

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

const TRAILER_ADD = gql`
  mutation($movieIdentifier: String!, $url: String!) {
    createTrailer(movieIdentifier: $movieIdentifier, url: $url) {
      identifier
      platform
      url
      slug
      thumbnailURL
      title
    }
  }
`;

const initialTrailer = () => ({
  url: '',
});

const createTrailerButton = onClick => (
  <Action onClick={onClick}>
    <PlusSVG />
    <FormattedMessage {...messages.buttonTrailerCreate} />
  </Action>
);

const Trailers = props => {
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const [selectedTrailerOG, setSelectedTrailerOG] = useState(null);
  const [isNew, setIsNew] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const selectTrailer = trailer => {
    setIsOpen(true);
    setIsNew(false);
    setSelectedTrailer(trailer);
    setSelectedTrailerOG(trailer);
  };

  const handleCreateNew = () => {
    setIsOpen(true);
    setIsNew(true);
    setSelectedTrailer(initialTrailer);
    setSelectedTrailerOG(initialTrailer);
  };

  const handleChange = newTrailer => {
    setSelectedTrailer(newTrailer);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setSelectedTrailer(null);
  };

  const handleAccept = () => {
    if (isNew) {
      handleTrailerAdd();
      return;
    }

    handleTrailerModify();
  };

  const handleTrailerAdd = () => {
    apolloClient
      .mutate({
        mutation: TRAILER_ADD,
        variables: {
          movieIdentifier: props.movie.identifier,
          url: selectedTrailer.url,
        },
      })
      .then(res => {
        props.trailerAdd(res.data.createTrailer);
        setIsOpen(false);
      })
      .catch();
  };

  const handleTrailerModify = () => {
    apolloClient
      .mutate({
        mutation: TRAILER_UPDATE,
        variables: {
          identifier: selectedTrailer.identifier,
          url: selectedTrailer.url,
        },
      })
      .then(res => {
        props.trailerUpdate(res.data.updateTrailer);
        setIsOpen(false);
      })
      .catch();
  };

  const disableTrailerSave = () => {
    if (!selectedTrailer.url) {
      return true;
    }

    const videoSlug = getVideoSlug(selectedTrailer.url);

    if (!videoSlug) {
      return true;
    }

    return selectedTrailer.url === selectedTrailerOG.url;
  };

  return (
    <>
      <BlockTitle
        title={props.intl.formatMessage(messages.trailers)}
        action={createTrailerButton(handleCreateNew)}
      />
      {!props.movie.trailers.length && (
        <NoTrailers>
          <FormattedMessage {...messages.noTrailers} />
        </NoTrailers>
      )}
      {props.movie.trailers.map(trailer => (
        <TrailerCard
          key={trailer.identifier}
          trailer={trailer}
          onClick={selectTrailer}
        />
      ))}
      {isOpen && (
        <Modal
          title={props.intl.formatMessage(messages.modifyTrailer)}
          onClose={handleModalClose}
          onAccept={handleAccept}
          disableAccept={disableTrailerSave()}
          maxWidth={600}
        >
          <Trailer trailer={selectedTrailer} onChange={handleChange} />
        </Modal>
      )}
    </>
  );
};

Trailers.propTypes = {
  intl: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  trailerAdd: PropTypes.func.isRequired,
  trailerUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  movie: makeSelectHomeMovie(),
});

const mapDispatchToProps = dispatch => ({
  trailerAdd: trailer => dispatch(trailerAdd(trailer)),
  trailerUpdate: trailer => dispatch(trailerUpdate(trailer)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(injectIntl, withConnect)(Trailers);
