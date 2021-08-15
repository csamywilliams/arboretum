import React from 'react';
import { screen } from '@testing-library/react';

import renderWithTheme from '__testHelpers__/renderWithTheme';
import { testData } from '__testHelpers__/testData';

import Filters from '../';

const mockDispatch = jest.fn();

const setup = () =>
	renderWithTheme(<Filters dispatch={mockDispatch} items={testData} />);

describe('Filters component', () => {
	beforeEach(setup);

	afterEach(() => jest.clearAllMocks());

	it('should render the Filters component', () => {
		screen.getByText(/species/i);

		screen.getByRole('checkbox', {
			name: /acer/i,
		});

		screen.getByRole('checkbox', {
			name: /aspen/i,
		});
	});
});
