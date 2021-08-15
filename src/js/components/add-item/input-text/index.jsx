import React, { useState } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

import InputTextStyled, { Label, ErrorText, ValidatedInputStyled } from './InputText.styled';

const InputText = ({ text, id, name, required, minLength, errorText, dispatch }) => {
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

InputText.defaultProps = {
    required: false,
    minLength: 4,
    errorText: 'Please enter a value',
};

InputText.propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    required: PropTypes.bool,
    minLength: PropTypes.number,
    errorText: PropTypes.string,
};

export default InputText;
