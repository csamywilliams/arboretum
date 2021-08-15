import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/button';

import useForm from 'hooks/useForm';

import InputText from './input-text';
import Textarea from './text-area';

import AddItemStyled, { Fieldset, ButtonContainer } from './AddItem.styled';

const AddItem = ({ addDispatch, modalIsOpen }) => {
    const { state, dispatch, isFormValid } = useForm();

    const onClick = () => {
        const { commonName, botanicalName, description } = state;

        addDispatch({
            type: 'add',
            item: {
                commonName: commonName.value,
                botanicalName: botanicalName.value,
                description: description.value,
            },
        });

        onClose();
    };

    const onClose = () => modalIsOpen(false);

    return (
        <AddItemStyled name="add item">
            <h1>Add Tree</h1>

            <Fieldset>
                <InputText
                    id="commonName"
                    text="Common name"
                    name="commonName"
                    required
                    minLength={4}
                    dispatch={dispatch}
                />
                <InputText
                    id="botanicalName"
                    text="Botanical name"
                    name="botanicalName"
                    required
                    minLength={4}
                    dispatch={dispatch}
                />
                <Textarea id="description" text="Description" name="description" minLength={4} dispatch={dispatch} />
            </Fieldset>

            <ButtonContainer>
                <Button text="Add" ariaLabel="Add item" onClick={onClick} disabled={!isFormValid} primary />
                <Button text="Close" ariaLabel="Close modal" onClick={onClose} />
            </ButtonContainer>
        </AddItemStyled>
    );
};

AddItem.propTypes = {
    addDispatch: PropTypes.func.isRequired,
    modalIsOpen: PropTypes.func.isRequired,
};

export default AddItem;
