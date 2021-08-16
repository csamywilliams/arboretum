import React, { useState } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

import TextareaStyled, { Label, ErrorText, ValidatedInputStyled, ContainerStyled } from './Textarea.styled';

const Textarea = ({ text, id, name, required, errorText, rows, cols, dispatch }) => {
    const [showError, setShowError] = useState(false);

    const onChange = (e) => {
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

Textarea.defaultProps = {
    required: false,
    errorText: 'Please enter a value',
    rows: '5',
    cols: '30',
};

Textarea.propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    required: PropTypes.bool,
    errorText: PropTypes.string,
    rows: PropTypes.string,
    cols: PropTypes.string,
};

export default Textarea;
