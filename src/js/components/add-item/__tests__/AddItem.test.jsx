import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import AddItem from '../';

const modalIsOpenMock = jest.fn();
const addDispatchMock = jest.fn();

const setup = () => renderWithTheme(<AddItem addDispatch={addDispatchMock} modalIsOpen={modalIsOpenMock} />);

describe('AddItem component', () => {
    beforeEach(setup);

    afterEach(() => jest.clearAllMocks());

    it('should render the AddItem component', () => {
        screen.getByRole('heading', {
            name: /Add tree/i,
        });
    });

    it('should call the modalIsOpen function when close button is clicked', () => {
        userEvent.click(
            screen.getByRole('button', {
                name: /close modal/i,
            })
        );

        expect(modalIsOpenMock).toHaveBeenCalledTimes(1);
    });

    it('should call the addDispatchMock function when add button is clicked', () => {
        userEvent.type(
            screen.getByRole('textbox', {
                name: /common name/i,
            }),
            'hey'
        );

        userEvent.type(
            screen.getByRole('textbox', {
                name: /botanical name/i,
            }),
            'tree'
        );

        userEvent.click(
            screen.getByRole('button', {
                name: /add item/i,
            })
        );

        expect(addDispatchMock).toHaveBeenCalledTimes(1);
    });
});
