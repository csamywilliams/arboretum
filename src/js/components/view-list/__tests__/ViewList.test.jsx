import React from 'react';
import { screen } from '@testing-library/react';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import { testData } from '__testHelpers__/testData';

import ViewList from '../';

const setup = () => renderWithTheme(<ViewList items={testData} />);

describe('ViewList component', () => {
	beforeEach(setup);

	it('should render the ViewList component with the list of trees', () => {
		screen.getByRole('heading', {
			name: testData[0].commonName,
		});

		screen.getByRole('heading', {
			name: testData[1].commonName,
		});
	});
});
