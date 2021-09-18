import { useEffect } from 'react';
import { Overlay, Modalstyle } from './Modal.styled';

export default function Modal({ largeImg, toggleModal }) {
  useEffect(() => {
    const handleEscClick = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleEscClick);
    return () => {
      window.removeEventListener('keydown', handleEscClick);
    };
  }, [toggleModal]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Modalstyle>
        <img src={largeImg} alt="" />
      </Modalstyle>
    </Overlay>
  );
}
