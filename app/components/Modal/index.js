/**
 *
 * Modal
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import CrossSVG from 'svgs/Times';
import Button from 'components/Button';
import BlockTitle from 'components/BlockTitle';

import messages from './messages';
import Wrapper from './styles/Wrapper';
import ModalWrapper from './styles/ModalWrapper';
import CloseCross from './styles/CloseCross';
import Actions from './styles/Actions';
import Content from './styles/Content';
import Title from './styles/Title';
import Background from './styles/Background';

function Modal({ children, onClose, onAccept, closeText, acceptText, title }) {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 200);
  };

  return (
    <Wrapper fadingOut={closing}>
      <Background onClick={handleClose} />
      <ModalWrapper>
        <CloseCross onClick={handleClose}>
          <CrossSVG />
        </CloseCross>
        <Title>
          <BlockTitle title={title} />
        </Title>
        <Content>{children}</Content>
        <Actions>
          <Button onClick={handleClose}>
            {closeText || <FormattedMessage {...messages.cancel} />}
          </Button>
          <Button onClick={onAccept}>
            {acceptText || <FormattedMessage {...messages.save} />}
          </Button>
        </Actions>
      </ModalWrapper>
    </Wrapper>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
  closeText: PropTypes.string,
  acceptText: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Modal;
