import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import trees from 'js/trees';

import { hyphenateWord } from 'utils/transformData';

import Dashboard from '../';

const [tree1] = trees;

const apple = /apple/i;
const acer = /acer/i;

const setup = () => renderWithTheme(<Dashboard />);

describe('Dashboard component', () => {
    beforeEach(setup);

    it('should render the Dashboard component', () => {
        screen.getByRole('heading', {
            name: /the arboretum/i,
        });

        screen.getByRole('button', {
            name: /add a tree/i,
        });

        screen.getByRole('heading', {
            name: tree1.commonName,
        });
    });

    it('should filter the items based on category click', async () => {
        userEvent.click(
            screen.getByRole('checkbox', {
                name: apple,
            })
        );

        await screen.queryAllByRole('heading', {
            name: apple,
        });

        expect(
            screen.queryByRole('heading', {
                name: acer,
            })
        ).toBeNull();
    });

    it('should filter and return the original items list when filter is unclicked', async () => {
        userEvent.click(
            screen.getByRole('checkbox', {
                name: apple,
            })
        );

        await screen.queryAllByRole('heading', {
            name: apple,
        });

        expect(
            screen.queryByRole('heading', {
                name: acer,
            })
        ).toBeNull();

        userEvent.click(
            screen.getByRole('checkbox', {
                name: apple,
            })
        );

        await screen.queryAllByRole('heading', {
            name: acer,
        });
    });

    it('should open the modal and view a tree species on item click', () => {
        const testId = `item-${hyphenateWord(tree1.commonName)}`;

        userEvent.click(screen.getByTestId(testId));

        screen.getByTestId(`modal-item-${tree1.commonName}`);

        userEvent.click(
            screen.getByRole('button', {
                name: /close modal/i,
            })
        );
    });

    it('should open the add modal and show form', async () => {
        userEvent.click(
            screen.getByRole('button', {
                name: /add a tree/i,
            })
        );

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

        await screen.getByRole('heading', {
            name: /hey/i,
        });
    });
});
