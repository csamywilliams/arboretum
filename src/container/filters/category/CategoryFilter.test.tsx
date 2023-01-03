import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithTheme from '__testHelpers__/renderWithTheme';

import CategoryFilter from './CategoryFilter';

const renderView = (mockDispatch = jest.fn()) =>
  renderWithTheme(<CategoryFilter dispatch={mockDispatch} />);

describe('CategoryFilter', () => {
  it('should render the component', () => {
    renderView();

    expect(screen.getByLabelText('Category:')).toBeInTheDocument();
  });

  it('should click the component and call the dispatch mock twice', async () => {
    const mockDispatch = jest.fn();
    renderView(mockDispatch);

    userEvent.click(screen.getByTestId('category-filter'));

    expect(screen.getByText(/acer/i)).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByRole('combobox'), ['ACER']);

    expect(mockDispatch).toHaveBeenCalledTimes(2);
  });

  it('should show the clear button when category selected', async () => {
    const mockDispatch = jest.fn();
    renderView(mockDispatch);

    userEvent.click(screen.getByTestId('category-filter'));

    expect(screen.getByText(/acer/i)).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByRole('combobox'), ['ACER']);

    expect(screen.getByRole('button', { name: 'Clear' })).toBeInTheDocument();
  });

  it('should reset the dropdown when the clear button is clicked', async () => {
    const mockDispatch = jest.fn();
    renderView(mockDispatch);

    userEvent.click(screen.getByTestId('category-filter'));

    expect(screen.getByText(/acer/i)).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByRole('combobox'), ['ACER']);

    const clearButton = screen.getByRole('button', { name: 'Clear' });

    expect(clearButton).toBeInTheDocument();

    userEvent.click(clearButton);

    expect(await screen.findByDisplayValue(/Category/i)).toBeInTheDocument();
  });
});
