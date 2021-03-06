/**
 *
 * Modal
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from 'components/Button';
import BlockTitle from 'components/BlockTitle';
import Portal from 'components/Portal';

import messages from './messages';
import Wrapper from './styles/Wrapper';
import ModalWrapper from './styles/ModalWrapper';
import Actions from './styles/Actions';
import Content from './styles/Content';
import Title from './styles/Title';
import Background from './styles/Background';

function Modal({
  children,
  onClose,
  onAccept,
  closeText,
  acceptText,
  disableAccept,
  title,
  maxWidth,
  centered,
  hideAccept,
}) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const handleKey = e => {
      if (e.keyCode === 27) handleClose();
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  const handleClose = () => {
    if (!onClose) {
      return;
    }
    setClosing(true);
    setTimeout(onClose, 200);
  };

  return (
    <Portal>
      <Wrapper fadingOut={closing}>
        <Background onClick={handleClose} />
        <ModalWrapper centered={centered} maxWidth={maxWidth}>
          <Title>
            <BlockTitle title={title} />
          </Title>
          <Content>{children}</Content>
          <Actions>
            <Button onClick={handleClose}>
              {closeText || <FormattedMessage {...messages.cancel} />}
            </Button>
            {!hideAccept && (
              <Button disabled={disableAccept} onClick={onAccept}>
                {acceptText || <FormattedMessage {...messages.save} />}
              </Button>
            )}
          </Actions>
        </ModalWrapper>
      </Wrapper>
    </Portal>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
  closeText: PropTypes.string,
  acceptText: PropTypes.string,
  title: PropTypes.string.isRequired,
  maxWidth: PropTypes.number,
  disableAccept: PropTypes.bool,
  centered: PropTypes.bool,
  hideAccept: PropTypes.bool,
};

Modal.defaultProps = {
  centered: true,
};

export default Modal;
