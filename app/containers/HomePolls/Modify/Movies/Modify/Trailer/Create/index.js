import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Modal from 'components/Modal';
import { getMocks, generatePathHomePollMovieModify } from 'utils/paths';
import history from 'utils/history';

const TrailerCreate = props => {
  const handleClose = () => {
    const { poll, movie } = getMocks(props.match);
    history.push(generatePathHomePollMovieModify(poll, movie));
  };

  return (
    <Modal maxWidth={600} onClose={handleClose} onAccept>
      dsa
    </Modal>
  );
};

TrailerCreate.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(TrailerCreate);
