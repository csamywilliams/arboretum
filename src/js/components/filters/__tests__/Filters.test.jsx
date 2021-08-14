import React from 'react';
import { screen } from '@testing-library/react';

import renderWithTheme from '__testHelpers__/renderWithTheme';
import { testData } from '__testHelpers__/testData';

import Filters from '../';

const setup = () =>
	renderWithTheme(<Filters dispatch={jest.fn()} items={testData} />);

describe('Filters component', () => {
	beforeEach(setup);

	it('should render the Filters component', () => {
		expect(true).toBe(true);
	});
});
