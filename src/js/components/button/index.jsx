import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyled from './Button.styled';

const Button = ({ text, ariaLabel, onClick, disabled, ...props }) => (
    <ButtonStyled type="button" aria-label={ariaLabel} onClick={onClick} disabled={disabled} {...props}>
        {text}
    </ButtonStyled>
);

Button.defaultProps = {
    ariaLabel: '',
    disabled: false,
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

export default Button;
