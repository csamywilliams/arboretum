import React from 'react';
import { screen } from '@testing-library/react';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import { testData } from '__testHelpers__/testData';

import List from '../';

const setup = () => renderWithTheme(<List id="test-list" options={testData} />);

describe('List component', () => {
	beforeEach(setup);

	it('should render a list of checkboxes grouped by category', () => {
		screen.getByRole('checkbox', {
			name: /acer/i,
		});

		screen.getByRole('checkbox', {
			name: /aspen/i,
		});
	});
});
