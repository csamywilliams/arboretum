import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import Item from '..';

const item = {
	botanicalName: 'Acer argutum',
	commonName: 'Deep-veined Maple',
};

const setup = () => renderWithTheme(<Item ariaLabel="item" item={item} />);

describe('Item component', () => {
	beforeEach(setup);

	it('should render a item', () => {
		screen.getByText(new RegExp(item.commonName, 'i'));
	});
});
