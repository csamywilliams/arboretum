import React, { useState } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import {Dispatch} from 'js/types';

import InputTextStyled, { Label, ErrorText, ValidatedInputStyled } from './InputText.styled';

type Props = {
    text: string,
    id: string,
    name: string,
    required: boolean,
    minLength?: number,
    errorText?: string,
    dispatch: (message: Dispatch) => void
}

const InputText = ({ text, id, name, required, minLength, errorText, dispatch }: Props) => {
    const [showError, setShowError] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        setShowError(required && value === '');

        dispatch({
            type: 'update',
            value,
            name,
            isValid: (required && value !== '') || !required,
        });
    };

    const updateInputClassName = showError ? 'input__error' : '';

    return (
        <ValidatedInputStyled>
            <InputTextStyled>
                <Label htmlFor={id}>{text}</Label>

                <input
                    type="text"
                    id={id}
                    name={name}
                    required={required}
                    minLength={minLength}
                    onChange={onChange}
                    onBlur={onChange}
                    className={`input ${updateInputClassName}`}
                />
            </InputTextStyled>
            {showError && (
                <ErrorText>
                    <RiErrorWarningLine />
                    {errorText}
                </ErrorText>
            )}
        </ValidatedInputStyled>
    );
};

export default InputText;
