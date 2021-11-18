import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import { testData } from '__testHelpers__/testData';

import ViewItem from '..';

const mockOnSetModalState = jest.fn();

const setup = () => renderWithTheme(<ViewItem item={testData[0]} setModalState={mockOnSetModalState} />);

describe('ViewItem component', () => {
	beforeEach(setup);

	afterEach(() => jest.clearAllMocks());

	it('should render item passed in', () => {

		const { commonName, botanicalName, category } = testData[0];

		screen.getByRole('heading', {
			name: commonName,
		});

		screen.getByRole('heading', {
			name: `${botanicalName} (${category})`,
		});
	});

	it('should call the mock change modal state function', () => {

		userEvent.click(screen.getByRole('button', {
			name: /close modal/i
		}));

		expect(mockOnSetModalState).toHaveBeenCalledTimes(1);
	});
});
