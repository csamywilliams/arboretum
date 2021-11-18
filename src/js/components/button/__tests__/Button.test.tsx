import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import Button from '..';

const mockOnClick = jest.fn();
const buttonText = 'Add a tree';
const ariaLabelText = 'Add a tree button';

const setup = () =>
	renderWithTheme(
		<Button
			onClick={mockOnClick}
			text={buttonText}
			ariaLabel={ariaLabelText}
		/>,
	);

describe('Button component', () => {
	beforeEach(setup);

	it('should render the Button component with text props', () => {
		screen.getByRole('button', {
			name: ariaLabelText,
		});
	});

	it('should call the onClick when button is clicked', () => {
		userEvent.click(
			screen.getByRole('button', {
				name: ariaLabelText,
			}),
		);

		expect(mockOnClick).toBeCalledTimes(1);
	});
});
