import React, { useState } from 'react';
import ModalStyled, { CloseButton } from './Modal.styled';
import Modal from 'react-modal';

const customStyles = {
	content: {
		minWidth: '50vw',
		minHeight: '50vh',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

Modal.setAppElement('#root');

const ModalOverlay = ({ children, modalIsOpen, setModalIsOpen }) => {
	const onClose = () => setModalIsOpen(false);

	return (
		<ModalStyled>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={onClose}
				contentLabel="Modal"
				style={customStyles}
			>
				<CloseButton onClick={onClose} aria-label="Close modal">
					X
				</CloseButton>
				<div>{children}</div>
			</Modal>
		</ModalStyled>
	);
};

export default ModalOverlay;
