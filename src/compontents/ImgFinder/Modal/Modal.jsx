import React from 'react';
import ReactDOM from 'react-dom';
import ReactImageAppear from 'react-image-appear';
import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ large, onCloseModal }) => {
  return ReactDOM.createPortal(
    <div onClick={onCloseModal} role="presentation" className={style.Overlay}>
      <div className={style.Modal}>
        <ReactImageAppear
          src={large}
          className={style.ImageGalleryItemImage}
          animation="fillIn"
          animationDuration="1s"
        />
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
