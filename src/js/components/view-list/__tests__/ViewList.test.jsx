import React from 'react';
import { screen } from '@testing-library/react';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import ViewList from '../';

const setup = () => renderWithTheme(<ViewList />);

describe('ViewList component', () => {
	beforeEach(setup);

	it('should render the ViewList component with the list of trees', () => {
		screen.getByRole('heading', {
			name: /broad maple/i,
		});

		screen.getByRole('heading', {
			name: /deep-veined maple/i,
		});
	});
});
