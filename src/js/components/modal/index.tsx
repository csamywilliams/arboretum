import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        width: '30vw',
        height: '50vh',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        background: 'rgba(0, 0, 0, 0.8)'
    }
};

type OverlayProps = {
    children: React.ReactNode,
    modalIsOpen: boolean,
};

Modal.setAppElement('#root');

const ModalOverlay = ({ children, modalIsOpen }: OverlayProps) => {
    return (
        <Modal isOpen={modalIsOpen} contentLabel="Modal" style={customStyles}>
            <div>{children}</div>
        </Modal>
    );
};

export default ModalOverlay;
