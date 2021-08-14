import React from 'react';
import { screen } from '@testing-library/react';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import Terrain from '..';

const setup = () => renderWithTheme(<Terrain />);

describe('Terrain component', () => {
	beforeEach(setup);

	it('should render the Terrain component', () => {
		expect(true).toBe(true);
	});
});
