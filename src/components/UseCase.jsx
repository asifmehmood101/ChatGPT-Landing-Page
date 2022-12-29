import React from 'react';
import Modal from 'react-modal';
import { Video } from './Video';
import { IoMdCloseCircle } from 'react-icons/io';

const customStyles = {
  content: {
    maxWidth: '1170px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    borderColor: '#209266',
    boxShadow:
      'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  },
};

export const UseCase = ({ title, id, image, subtitle, Link, videoSrc }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);


  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div key={id}>
      <div className='hoverbox' onClick={handleOpenModal}>
        <img className='hoverbox__image' src={image} alt='broken' />
        <h3>{title}</h3>
        <p className='elipsis'>{subtitle}</p>
        <a href={Link}>More infos</a>
      </div>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={title}
      >
        <Video showControls={true} videoSrc={videoSrc} videoType='useCase' />

        <div className='ModalContentwrapper'>
          <button className='modalCloseBtn' onClick={closeModal}>
            <IoMdCloseCircle fontSize={30} color='#209266' />
          </button>
          <h2 className='modalItemTitle'>{title}</h2>
          <p className='modalItemSubtitle'>{subtitle}</p>
        </div>
      </Modal>
    </div>
  );
};
