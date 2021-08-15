import React from 'react';
import PropTypes from 'prop-types';
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
};

Modal.setAppElement('#root');

const ModalOverlay = ({ children, modalIsOpen }) => {
    return (
        <Modal isOpen={modalIsOpen} contentLabel="Modal" style={customStyles}>
            <div>{children}</div>
        </Modal>
    );
};

ModalOverlay.defaultProps = {
    onClick() {},
};

ModalOverlay.propTypes = {
    children: PropTypes.node.isRequired,
    modalIsOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
};

export default ModalOverlay;
