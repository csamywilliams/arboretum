import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import InputText from '../';

const inputTextId = 'input-text';
const inputTextName = 'some-name';
const inputTextLabel = 'Input text:';

const validationError = /please enter a value/i;

const setup = ({ required }) =>
    renderWithTheme(
        <InputText
            id={inputTextId}
            name={inputTextName}
            text={inputTextLabel}
            required={required}
            dispatch={jest.fn()}
        />
    );

describe('InputText component', () => {
    it('should render the InputText component', () => {
        setup({ required: false });
        screen.getByText(inputTextLabel);

        screen.getByRole('textbox', {
            name: inputTextLabel,
        });
    });

    it('should render the error text when no value has been entered', () => {
        setup({ required: true });

        const textbox = screen.getByRole('textbox', {
            name: inputTextLabel,
        });

        screen.getByText(inputTextLabel);

        userEvent.type(textbox, 'hey');

        expect(screen.queryByText(validationError)).toBeNull();

        userEvent.type(textbox, '{selectall}{del}');

        screen.getByText(validationError);
    });

    it('should not render the error text when no value has been entered for a not required field', () => {
        setup({ required: false });

        const textbox = screen.getByRole('textbox', {
            name: inputTextLabel,
        });

        screen.getByText(inputTextLabel);

        userEvent.type(textbox, 'hey');

        expect(screen.queryByText(validationError)).toBeNull();

        userEvent.type(textbox, '{selectall}{del}');
        expect(screen.queryByText(validationError)).toBeNull();
    });
});
