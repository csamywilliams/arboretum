import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import Textarea from '..';

const textareaId = 'textarea';
const textareaName = 'description';
const textareaLabel = 'description';

const validationError = /please enter a value/i;

const setup = ({ required }) =>
    renderWithTheme(
        <Textarea id={textareaId} name={textareaName} text={textareaLabel} required={required} dispatch={jest.fn()} />
    );

describe('InputText component', () => {
    it('should render the InputText component', () => {
        setup({ required: false });
        screen.getByText(textareaLabel);

        screen.getByRole('textbox', {
            name: textareaLabel,
        });
    });

    it('should render the error text when no value has been entered', () => {
        setup({ required: true });

        const textarea = screen.getByRole('textbox', {
            name: textareaLabel,
        });

        userEvent.type(textarea, 'hey');

        expect(screen.queryByText(validationError)).toBeNull();

        userEvent.type(textarea, '{selectall}{del}');

        screen.getByText(validationError);
    });

    it('should not render the error text when no value has been entered for a not required field', () => {
        setup({ required: false });

        const textarea = screen.getByRole('textbox', {
            name: textareaLabel,
        });

        userEvent.type(textarea, 'hey');

        expect(screen.queryByText(validationError)).toBeNull();

        userEvent.type(textarea, '{selectall}{del}');
        expect(screen.queryByText(validationError)).toBeNull();
    });
});
