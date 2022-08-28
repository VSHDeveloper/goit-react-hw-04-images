import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, StyledModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ largeImage, onModalClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onModalClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <StyledModal>
        <img src={largeImage.largeUrl} alt={largeImage.alt} />
      </StyledModal>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  largeImage: PropTypes.shape({
    largeUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default Modal;
