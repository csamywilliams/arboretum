import React from 'react';
import { screen } from '@testing-library/react';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import Card from '..';

const tree = {
	botanicalName: 'Acer amplum',
	commonName: 'Broad Maple',
	category: 'acer',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

const setup = () => renderWithTheme(<Card data={tree} onClick={jest.fn()} />);

describe('Card component', () => {
	beforeEach(setup);

	it('should render the Card component', () => {
		screen.getByRole('heading', {
			name: tree.commonName,
		});

		screen.getByText(tree.description);
	});
});
