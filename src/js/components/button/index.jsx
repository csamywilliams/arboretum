import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyled from './Button.styled';

const Button = ({ text, ariaLabel, onClick, ...props }) => (
	<ButtonStyled
		type="button"
		aria-label={ariaLabel}
		onClick={onClick}
		{...props}
	>
		{text}
	</ButtonStyled>
);

Button.defaultProps = {
	ariaLabel: '',
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	ariaLabel: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

export default Button;
