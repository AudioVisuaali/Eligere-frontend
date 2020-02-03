import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage } from 'react-intl';

import Modal from 'components/Modal';
import Label from 'components/Label';
import DangerZone from 'components/DangerZone';
import DeleteButton from './styles/DeleteButton';
import messages from './messages';

const Description = styled.div`
  color: #fff;
`;

const DeletePoll = ({ intl, onDelete }) => {
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);

  return (
    <>
      <DangerZone>
        <Label style={{ marginRight: 40 }}>
          <FormattedMessage {...messages.pollDeletionDescription} />
        </Label>
        <DeleteButton
          style={{ flexShrink: 0 }}
          onClick={() => setConfirmModalOpen(true)}
        >
          <FormattedMessage {...messages.deletePoll} />
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

DeletePoll.propTypes = {
  onDelete: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(DeletePoll);
