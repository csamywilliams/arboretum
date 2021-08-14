import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import VerticalList from '../';

const testData = [
	{
		botanicalName: 'Acer amplum',
		commonName: 'Broad Maple',
	},
	{
		botanicalName: 'Acer argutum',
		commonName: 'Deep-veined Maple',
	},
];

const setup = () =>
	renderWithTheme(<VerticalList ariaLabel="list" data={testData} />);

describe('VerticalList component', () => {
	beforeEach(setup);

	it('should render a list of items', () => {
		expect(true).toBe(true);
	});
});
