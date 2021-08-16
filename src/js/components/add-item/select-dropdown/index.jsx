import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import SelectDropdownStyled, { SelectOption, Label, ContainerStyled } from './SelectDropdown.styled';

const SelectDropdown = ({ text, id, name, options, dispatch }) => {
    useEffect(() => {
        const firstOption = options[0];

        dispatch({
            type: 'updateKeyValue',
            value: firstOption,
            name,
        });
    }, []);

    const onChange = (e) => {
        const { value } = e.target;

        dispatch({
            type: 'updateKeyValue',
            value,
            name,
        });
    };

    return (
        <ContainerStyled>
            <Label htmlFor={id}>{text}</Label>

            <SelectDropdownStyled id={id} name={name} onChange={onChange}>
                {options.map((option) => (
                    <SelectOption key={option} value={option}>
                        {option.toUpperCase()}
                    </SelectOption>
                ))}
            </SelectDropdownStyled>
        </ContainerStyled>
    );
};

SelectDropdown.propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectDropdown;
