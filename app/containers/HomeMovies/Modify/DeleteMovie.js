import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';

import Modal from 'components/Modal';
import DangerZone from 'components/DangerZone';
import Label from 'components/Label';
import DeleteButton from './styles/DeleteButton';
import messages from './messages';

const Description = styled.div`
  color: #fff;
`;

const DeleteMovie = ({ intl, onDelete }) => {
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);

  return (
    <>
      <DangerZone>
        <Label style={{ marginRight: 40 }}>
          <FormattedMessage {...messages.movieDeletionDescription} />
        </Label>
        <DeleteButton onClick={() => setConfirmModalOpen(true)}>
          <FormattedMessage {...messages.deleteMovie} />
        </DeleteButton>
      </DangerZone>
      {isConfirmModalOpen && (
        <Modal
          maxWidth={500}
          title={intl.formatMessage(messages.confirmation)}
          acceptText={intl.formatMessage(messages.confirm)}
          onClose={() => setConfirmModalOpen(false)}
          onAccept={onDelete}
        >
          <Description>
            <FormattedMessage {...messages.confirmDescription} />
          </Description>
        </Modal>
      )}
    </>
  );
};

DeleteMovie.propTypes = {
  onDelete: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(DeleteMovie);
