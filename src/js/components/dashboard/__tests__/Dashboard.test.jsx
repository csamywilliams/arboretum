import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import Dashboard from '../';

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
			name: /broad maple/i,
		});
	});

	it('should filter the items based on category click', async () => {
		userEvent.click(
			screen.getByRole('checkbox', {
				name: /apple/i,
			}),
		);

		await screen.queryByRole('heading', {
			name: /apple/i,
		});

		expect(
			screen.queryByRole('heading', {
				name: /acer/i,
			}),
		).toBeNull();
	});

	it('should filter and return the original items list when filter is unclicked', async () => {
		userEvent.click(
			screen.getByRole('checkbox', {
				name: /apple/i,
			}),
		);

		await screen.queryByRole('heading', {
			name: /apple/i,
		});

		expect(
			screen.queryByRole('heading', {
				name: /acer/i,
			}),
		).toBeNull();

		userEvent.click(
			screen.getByRole('checkbox', {
				name: /apple/i,
			}),
		);

		await screen.queryByRole('heading', {
			name: /acer/i,
		});
	});
});
