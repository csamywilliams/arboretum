import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import SelectDropdown from '..';

const selectId = 'select-dropdown';
const selectName = 'category';
const selectLabel = 'Category';

const options = ['item1', 'item2', 'item3'];

const mockDispatch = jest.fn();

const setup = () =>
    renderWithTheme(
        <SelectDropdown id={selectId} name={selectName} text={selectLabel} dispatch={mockDispatch} options={options} />
    );

describe('SelectDropdown component', () => {
    beforeEach(setup);

    afterEach(() => jest.clearAllMocks());

    it('should render the SelectDropdown component', () => {
        screen.getByText(selectLabel);
    });

    it('should call the dispatch method twice on change', () => {
        screen.getByText(selectLabel);

        userEvent.selectOptions(
            screen.getByRole('combobox', {
                name: /category/i,
            }),
            'item2'
        );

        expect(mockDispatch).toHaveBeenCalledTimes(2);
    });
});
