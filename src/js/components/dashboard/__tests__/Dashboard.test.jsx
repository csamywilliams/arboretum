import React from 'react';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import Dashboard from '../';

const setup = () => renderWithTheme(<Dashboard />);

describe('Dashboard component', () => {
	beforeEach(setup);

	it('should render the Dashboard component', () => {
		expect(true).toBe(true);
	});
});
