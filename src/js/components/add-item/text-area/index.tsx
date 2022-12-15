import React, { useState } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Dispatch } from 'js/types';

import TextareaStyled, { Label, ErrorText, ValidatedInputStyled, ContainerStyled } from './Textarea.styled';

type Props = {
    text: string,
    id: string,
    name: string,
    required?: boolean,
    errorText?: string,
    rows?: number,
    cols?: number,
    dispatch: (message: Dispatch) => {}
}

const Textarea = ({ text, id, name, required, errorText, rows, cols, dispatch }: Props) => {
    const [showError, setShowError] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;

        setShowError(required && value === '');

        dispatch({
            type: 'update',
            value,
            name,
            isValid: (required && value !== '') || !required,
        });
    };

    const updateInputClassName = showError ? 'textarea__error' : '';

    return (
        <ValidatedInputStyled>
            <ContainerStyled>
                <Label htmlFor={id}>{text}</Label>

                <TextareaStyled
                    id={id}
                    name={name}
                    required={required}
                    rows={rows}
                    cols={cols}
                    placeholder="Enter text here"
                    onChange={onChange}
                    onBlur={onChange}
                    className={`textarea ${updateInputClassName}`}
                />
            </ContainerStyled>
            {showError && (
                <ErrorText>
                    <RiErrorWarningLine />
                    {errorText}
                </ErrorText>
            )}
        </ValidatedInputStyled>
    );
};

export default Textarea;
