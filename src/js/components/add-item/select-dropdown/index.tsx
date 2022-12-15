import React, { useEffect } from 'react';

import SelectDropdownStyled, { SelectOption, Label, ContainerStyled } from './SelectDropdown.styled';
import {Dispatch} from 'js/types';

type Props = {
    text: string,
    id: string,
    name: string,
    options: string[],
    dispatch: (message: Dispatch) => {}
}

const SelectDropdown = ({ text, id, name, options, dispatch }: Props) => {
    useEffect(() => {
        const firstOption = options[0];

        dispatch({
            type: 'updateKeyValue',
            value: firstOption,
            name,
        });
    }, [dispatch, options, name]);

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

export default SelectDropdown;
