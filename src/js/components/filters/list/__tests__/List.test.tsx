import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import { testData } from '__testHelpers__/testData';

import List from '..';

const mockDispatch = jest.fn();

const setup = () =>
	renderWithTheme(
		<List id="test-list" options={testData} dispatch={mockDispatch} />,
	);

describe('List component', () => {
	beforeEach(setup);

	afterEach(() => jest.clearAllMocks());

	it('should render a list of checkboxes grouped by category', () => {
		screen.getByRole('checkbox', {
			name: /acer/i,
		});

		screen.getByRole('checkbox', {
			name: /aspen/i,
		});
	});

	it('should call the dispatch function on checkbox change', () => {
		userEvent.click(
			screen.getByRole('checkbox', {
				name: /acer/i,
			}),
		);

		expect(mockDispatch).toHaveBeenCalledTimes(2);
	});
});
