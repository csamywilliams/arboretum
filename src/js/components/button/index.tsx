import React from 'react';

import ButtonStyled from './Button.styled';

type Props = {
    text: string,
    ariaLabel: string,
    onClick: any,
    disabled?: boolean,
    primary?: any
};

const Button = ({ text, ariaLabel, onClick, disabled, ...props }: Props) => (
    <ButtonStyled type="button" aria-label={ariaLabel} onClick={onClick} disabled={disabled} {...props}>
        {text}
    </ButtonStyled>
);

export default Button;
