import React from 'react';
import { screen } from '@testing-library/react';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import Sidebar from '../';

const setup = () => renderWithTheme(<Sidebar />);

describe('Sidebar component', () => {
	beforeEach(setup);

	it('should render the Sidebar component', () => {
		expect(true).toBe(true);
	});
});
