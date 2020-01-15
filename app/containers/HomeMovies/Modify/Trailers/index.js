import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import BlockTitle from 'components/BlockTitle';
import Trailer from 'containers/Trailer';
import Modal from 'components/Modal';
import TrailerCard from './TrailerCard';
import messages from './messages';

const Trailers = props => {
  const [selectedTrailer, setSelectedTrailer] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleTrailer = trailer => {
    console.log(trailer);
    setIsOpen(true);
    setSelectedTrailer(trailer);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setSelectedTrailer(null);
  };
  console.log(selectedTrailer, isOpen);
  return (
    <>
      <BlockTitle title={props.intl.formatMessage(messages.trailers)} />
      {props.movie.trailers.map(trailer => (
        <TrailerCard
          key={trailer.identifier}
          trailer={trailer}
          onClick={handleTrailer}
        />
      ))}
      {isOpen && (
        <Modal
          title={props.intl.formatMessage(messages.modifyTrailer)}
          onClose={handleModalClose}
          onAccept={console.log}
          maxWidth={600}
        >
          <Trailer trailer={selectedTrailer} />
        </Modal>
      )}
    </>
  );
};

Trailers.propTypes = {
  intl: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
};

export default injectIntl(Trailers);
