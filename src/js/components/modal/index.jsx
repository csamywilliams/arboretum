import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import Button from 'components/button';

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

const ModalOverlay = ({
	children,
	modalIsOpen,
	setModalIsOpen,
	buttonProps,
}) => {
	const onClose = () => setModalIsOpen(false);

	const { buttonText, buttonAriaLabel, onButtonClick } = buttonProps;

	const onClick = () => {
		onButtonClick();
		onClose();
	};

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={onClose}
			contentLabel="Modal"
			style={customStyles}
		>
			<div>{children}</div>
			<Button
				text={buttonText}
				ariaLabel={buttonAriaLabel}
				onClick={onClick}
			/>
		</Modal>
	);
};

ModalOverlay.defaultProps = {
	onClick() {},
};

ModalOverlay.propTypes = {
	buttonProps: PropTypes.shape({
		buttonText: PropTypes.string.isRequired,
		buttonAriaLabel: PropTypes.string.isRequired,
		onButtonClick: PropTypes.func.isRequired,
	}).isRequired,
	onClick: PropTypes.func,
};

export default ModalOverlay;
