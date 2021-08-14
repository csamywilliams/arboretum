import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import Canvas from '../';

const setup = () => renderWithTheme(<Canvas />);

describe('Canvas component', () => {
	beforeEach(setup);

	it('should render a Canvas component with clickable regions', () => {
		screen.getByRole('button', {
			name: ariaLabelText,
		});
	});
});
